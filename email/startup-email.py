import pandas as pd
import google.generativeai as genai
import json
import time

# --- CONFIGURATION ---
# Get your API key from Google AI Studio (it's free)
genai.configure(api_key="AIzaSyB_t4n64RF-nUQsdaLLnlN5UHJWJM0Oy5I")
INPUT_FILE = "startups_list.xlsx"
OUTPUT_FILE = "startups_list_with_emails.xlsx"

# Initialize the model (using flash for speed and cost-efficiency)
model = genai.GenerativeModel('gemini-3-flash-preview')

# --- TANISH'S PORTFOLIO (Translated for Impact, not just Tech) ---
TANISH_PORTFOLIO = """
1. DevTools/Enterprise: Core engineer at Thunder Client. Scaled the platform to over 8 million installs because developers were tired of heavy, slow tools. I know how to build for massive scale.
2. Media/Creator/Video: Built a completely automated video production engine from scratch. It takes raw media and automatically edits and syncs a final 10-minute video without a human ever touching it.
3. High-Pressure/General AI: Unbeaten in the NYC hackathon circuit (4 consecutive wins, including HSBC's global AI hackathon). I know how to prototype and ship winning products under extreme 48-hour time constraints.
4. AI Agents/Gaming: Built 'Project Argus', an AI simulation where autonomous agents have long-term memory and can actually catch each other in lies during a narrative game.
5. Fintech/Data Science: Built the FitchGroup ESG Modeler. I know how to take incredibly messy, skewed financial data and build machine learning models that actually make sense of it for enterprise use.
6. HealthTech/MedTech: Built 'Connect2Care', an AI hospital platform that uses predictive analytics to automate patient triage and smooth out hospital operations.
7. PropTech/GIS: Built a Geospatial Real Estate Engine that flawlessly maps complex property data without the app lagging or crashing.

MS Computer Engineering, New York University (NYU), NYC. Exp. May 2027.
2. PROFESSIONAL EXPERIENCE MODULES
Use "Narrative A" for AI/Security/Research roles. Use "Narrative B" for SWE/Full Stack/Product roles.
Role 1: Software Developer Intern @ HSBC Software Development India
Dates: Jan 2025 – Mar 2025
Narrative A (AI Safety & Research Focus):
Engineered Adversarial Safety Classifiers (BERT/XGBoost) to detect non-compliant/risk-prone language in internal comms.
Focused on Out-of-Distribution (OOD) robustness to reduce false positives in financial news feeds.
Improved risk monitoring accuracy by 45% using empirical evaluation metrics.
Narrative B (Full Stack / Backend & Data Engineering Focus):
Designed and deployed a Dockerized, real-time transaction monitoring platform using Python and SQL to automatically detect fraudulent patterns and system anomalies.
Constructed scalable data pipelines to process over 1 million daily transaction logs, cleansing and structuring data for ingestion into internal analytics tools.
Launched a GitHub productivity dashboard using React and Chart.js to visualize key metrics like PR merge times, reducing average development cycle time by 15%.
Role 2: Software Developer Intern @ Thunder Client
Dates: Apr 2023 – Aug 2025
Narrative A (AI & Infrastructure Focus):
Architected an LLM-based documentation synthesis engine using RAG to reduce hallucination rates in API specs.
Implemented Semantic Search using SBERT/FAISS for querying developer documentation.
Narrative B (Full Stack / MERN & API Tooling Focus):
Engineered a secure SSO (Single Sign-On) system using OAuth2 (Okta, Google), enabling seamless enterprise user adoption.
Developed a Node.js mock server to simulate financial API transactions, reducing developer testing setup time by 40%.
Architected a high-performance Swagger-to-OpenAPI 3.0 converter in TypeScript, automating documentation workflows and slashing manual effort by 90%.
Led a new gRPC testing interface, expanding core capabilities beyond REST, and implemented intelligent endpoint autocompletion by parsing OpenAPI schemas.
3. PROJECT & HACKATHON MODULES
Project A: PitchPerfect (Winner, Iterate NYC Hackathon)
Keywords: Audio Processing, Low Latency, Real-time Systems, WebSocket.
Tech Stack: Python, React, Audio Buffers.
Key Achievement: Engineered a <200ms latency feedback loop to align speaker tone with sentiment targets.
Use for: Real-time Systems, Hackathon/Fast-paced roles.
Project B: FitchGroup ESG Modeler (Runner Up, FitchGroup Codeathon)
Keywords: Data Engineering, Fintech, Data Skew.
Tech Stack: Python, Pandas, Ensemble Models.
Key Achievement: Solved massive data skew (Pareto distribution) in ESG datasets using a "physics-constrained" ensemble model.
Use for: Fintech, Data Science, Quant roles.
Project C: Clovet (Runner Up, Columbia DivHacks)
Keywords: Full Stack, E-commerce, Computer Vision, React.
Tech Stack: MERN Stack (React, Node, MongoDB), Gemini API.
Key Achievement: Built a semantic search engine and Virtual Try-On feature; handled cross-platform scraping.
Use for: Full Stack, Product Engineering, Consumer App roles.
Project D: BuildBot AI (Local LLM Code Gen)
Keywords: GenAI, Full Stack, Infrastructure.
Tech Stack: React, Node.js, Llama 3.1, Ollama.
Key Achievement: Architected a system to generate full-stack apps (React/Node) with syntax validation loops to ensure executable code.
Use for: DevTools, AI Platform, Full Stack roles.
Project E: Traffic Management System
Keywords: Computer Vision, IoT, Systems.
Tech Stack: YOLOv8, OpenCV, TensorFlow.
Key Achievement: Designed fail-safe logic for traffic lights; reduced idle wait times by 60%.
Use for: Embedded Systems, Smart City roles.
4. SKILL CLUSTERS
Languages: C/C++, Java, Python, TypeScript, SQL.
Full Stack / Web: React, Node.js, Express.js, MongoDB, HTML/CSS, Tailwind.
Backend & Systems: Docker, AWS, Kafka, Redis, gRPC, REST, GraphQL, OAuth2 (SSO).
Tools & DevOps: Linux, CI/CD, Git, Postman, Swagger, Ollama, VSCode.
AI/ML: TensorFlow, PyTorch, RAG, LangChain, Hugging Face.
"""

def generate_email(row):
    founder_name = str(row.get('Founder Name', 'Founder')).split()[0]
    company_name = str(row.get('Company Name', 'your company'))
    product_focus = str(row.get('Product / Innovation Focus', 'your current product'))
    industry = str(row.get('Industry Focus', 'tech'))
    
    # THE FOUNDER-FRIENDLY PROMPT
    prompt = f"""
    You are Tanish, an MS Computer Engineering student at NYU. You are a highly competent software engineer, but you are writing to a startup founder who might be non-technical. You want to sound enthusiastic about their vision, while proving you have the execution skills to back it up.
    
    Here is your portfolio of past projects:
    {TANISH_PORTFOLIO}

    You are writing a cold email to {founder_name}, founder of {company_name}.
    Their product focus: {product_focus} ({industry}).
    
    Write a short, human, enthusiastic cold email asking for a summer engineering role.
    
    RULES:
    1. The Hook: Start by genuinely complimenting what their company is doing. (e.g., "Hi [Name], I absolutely love what you are building at [Company] regarding [their specific focus].")
    2. The Pivot & Proof: Connect their mission to ONE relevant project from your portfolio above. Explain what you built and the impact it had in plain English. 
    3. The Persona: Emphasize that you are a builder. Mention that you spend all your time researching and coding, you know how to build apps from scratch, and you trust your execution. 
    4. The Ask: Ask if they have any engineering opportunities this summer for someone who just wants to ship great products. also say you'd love to learn more about their work and vision. and check my portfolio for more context on my skills and experience.
    5. Forbidden words: "delve", "thrilled", "synergy", "revolutionize", "AI slop". 
    6. Length: Keep the email body strictly under 130 words.
    
    OUTPUT FORMAT:
    You must return ONLY a valid JSON object with exactly two keys: "subject" and "body". Do not include markdown formatting like ```json.
    """
    
    try:
        response = model.generate_content(
            prompt,
            generation_config=genai.GenerationConfig(
                response_mime_type="application/json",
                temperature=0.6 # A bit higher for a warmer, more natural tone
            )
        )
        
        email_data = json.loads(response.text)
        return email_data.get("subject", ""), email_data.get("body", "")
    
    except Exception as e:
        print(f"Error generating for {company_name}: {e}")
        return "Error", "Error"

def main():
    print(f"Loading data from {INPUT_FILE}...")
    df = pd.read_excel(INPUT_FILE)
    
    if 'Email Subject' not in df.columns:
        df['Email Subject'] = ""
    if 'Email Body' not in df.columns:
        df['Email Body'] = ""
        
    print(f"Found {len(df)} rows. Starting email generation...")
    
    for index, row in df.iterrows():
        if pd.isna(row.get('Company Name')):
            continue
        if pd.notna(row.get('Email Body')) and str(row.get('Email Body')).strip() != "":
            continue
            
        print(f"Processing {index + 1}/{len(df)}: {row.get('Company Name', 'Unknown')}")
        
        subject, body = generate_email(row)
        
        df.at[index, 'Email Subject'] = subject
        df.at[index, 'Email Body'] = body
        
        time.sleep(2)
        
    print(f"Saving results to {OUTPUT_FILE}...")
    df.to_excel(OUTPUT_FILE, index=False)
    print("Done!")

if __name__ == "__main__":
    main()






