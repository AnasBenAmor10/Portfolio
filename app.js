const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const themeToggle = document.querySelector(".theme-toggle");
const themeLabel = document.querySelector(".theme-label");
const themeMeta = document.querySelector('meta[name="theme-color"]');

const setTheme = (theme) => {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
  themeLabel.textContent = `${isDark ? "Light" : "Dark"} mode`;
  themeMeta.content = isDark ? "#111915" : "#f3f5ef";
};

let savedTheme;
try {
  savedTheme = localStorage.getItem("portfolio-theme-v2");
} catch {
  savedTheme = null;
}

setTheme(savedTheme || "dark");

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  setTheme(nextTheme);
  try {
    localStorage.setItem("portfolio-theme-v2", nextTheme);
  } catch {
    // Theme still works for the current page when storage is unavailable.
  }
});

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
  mainNav.classList.toggle("is-open", !isExpanded);
});

mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    mainNav.classList.remove("is-open");
  }
});

document.querySelector("#current-year").textContent = new Date().getFullYear();

const projects = [
  {
    id: "agentic-oracle-snowflake", category: "ai", type: "END-OF-STUDY PROJECT / DATA & GENAI", title: "Agentic Oracle-to-Snowflake Migration",
    question: "Can multiple AI agents help move data workloads from Oracle to Snowflake?",
    summary: "An end-of-study project exploring agentic automation for migration, transformation, and analytics preparation.",
    overview: "This project focuses on automating the migration of data workloads from Oracle to Snowflake. A multi-agent approach supports migration tasks, generates transformation logic, and prepares transformed data for analytics.",
    workflow: ["Analyze Oracle source structures and migration requirements.", "Coordinate multiple agents across migration tasks.", "Generate Snowflake-oriented data transformation logic.", "Prepare transformed outputs for analytics use."],
    stack: ["Oracle", "Snowflake", "Multi-agent AI", "Data transformation", "Analytics"],
    source: "Project summary based on the CV and project description."
  },
  {
    id: "ambulance-sync", category: "ai", type: "GENAI / HEALTHCARE", title: "Ambulance ER Pre-arrival Sync",
    question: "How do you give emergency teams useful context before arrival?",
    summary: "Turn ambulance conversations into structured information for emergency teams before arrival.",
    image: "img/Projects/project15%20(2).png", imageAlt: "Ambulance emergency-room synchronization architecture", imageCaption: "Speech transcription, summarization, and pre-arrival reporting flow.",
    overview: "A near-real-time workflow that transcribes ambulance conversations, summarizes patient details and urgency, and presents a structured report for emergency-room staff.",
    workflow: ["Transcribe audio with Whisper.", "Use Llama to summarize patient details and emergency level.", "Generate a structured patient report.", "Display transcripts and summaries in a Streamlit dashboard."],
    stack: ["Python", "Whisper", "Llama", "Streamlit", "Pinecone"],
    repository: "https://github.com/AnasBenAmor10/Ambulance-ER-PreArrival-Sync-Powered-by-LLM"
  },
  {
    id: "air-quality", category: "ai", type: "AI / CLOUD DATA", title: "Air Quality Monitoring & Prediction",
    question: "Can a live data stream explain tomorrow's air quality?",
    summary: "Stream air-quality data into dashboards, forecasts, and generated reports.",
    image: "img/Projects/project6.png", imageAlt: "Air-quality data platform architecture", imageCaption: "Cloud ingestion, analytics, visualization, and prediction components.",
    overview: "A cloud-based project using OpenWeather air-pollution data for monitoring and forecasting. It combines a streaming data pipeline, a dashboard, prediction models, and LLM-generated reporting.",
    workflow: ["Collect current air-quality data from OpenWeather.", "Stream and transform records with Kinesis and Lambda, then store them in S3.", "Catalog and query data with Glue and Athena; visualize it in Grafana.", "Train air-quality prediction models and generate readable reports with an LLM."],
    stack: ["OpenWeather API", "AWS Kinesis", "Lambda", "S3", "Glue", "Athena", "Grafana", "SageMaker", "LLM"],
    repository: "https://github.com/AnasBenAmor10/AWS-Air-Quality-Prediction-Dashboard-with-LLM-and-ML-Integration"
  },
  {
    id: "elt-automation", category: "data", type: "DATA ENGINEERING / ELT", title: "ELT Pipeline Automation",
    question: "What makes an analytics pipeline reusable and testable?",
    summary: "A reusable Snowflake analytics pipeline with dbt transformations and Airflow orchestration.",
    image: "img/Projects/project11.png", imageAlt: "dbt, Snowflake, and Airflow pipeline diagram", imageCaption: "ELT models, warehouse, and orchestration workflow.",
    overview: "An end-to-end ELT project built around Snowflake sample data. dbt organizes the work into staging, intermediate, and mart models, with data quality tests and scheduled execution through Airflow and Astronomer Cosmos.",
    workflow: ["Read the Snowflake TPCH orders and line-item tables.", "Clean source data into dbt staging models.", "Build intermediate transformations and analytics marts.", "Run dbt tests and orchestrate daily execution with Airflow."],
    stack: ["Snowflake", "dbt", "Apache Airflow", "Astronomer Cosmos", "Docker", "Python"],
    repository: "https://github.com/AnasBenAmor10/ELT-Pipeline-Automation-with-dbt-Snowflake-and-Airflow"
  },
  {
    id: "multimodal-chatbot", category: "ai", type: "GENERATIVE AI / MULTIMODAL", title: "Local Multimodal Chatbot",
    question: "Can one assistant understand voice, images, and PDFs?",
    summary: "One assistant for voice, image, and PDF conversations, using local language models.",
    image: "img/Projects/project13.png", imageAlt: "Multimodal local chat application screenshot", imageCaption: "A single chat interface for multimodal questions and answers.",
    overview: "A unified chat application that combines speech transcription, image understanding, and document question-answering. Its README describes Whisper for audio, LLaVA for images, ChromaDB for PDF retrieval, and quantized models for local use.",
    workflow: ["Transcribe voice input with Whisper.", "Interpret image questions with LLaVA.", "Index PDF text in ChromaDB and retrieve relevant passages.", "Generate responses with a locally hosted, quantized language model."],
    stack: ["Python", "Streamlit", "Whisper", "LLaVA", "ChromaDB", "Mistral"],
    repository: "https://github.com/AnasBenAmor10/Chatbot_Multimodal"
  },
  {
    id: "nifi-knowledge-assistant", category: "ai", type: "GENAI / KNOWLEDGE AUTOMATION", title: "Knowledge Assistant with NiFi",
    question: "How do you keep a knowledge base current and useful?",
    summary: "Automate knowledge ingestion and answer questions using the indexed content.",
    image: "img/Projects/project14.png", imageAlt: "NiFi knowledge ingestion and question-answering architecture", imageCaption: "Separate ingestion and response flows for a document-backed assistant.",
    overview: "A customized chatbot concept for answering questions from internal PDFs and website content. The repository separates automated content storage and ingestion from query and response generation.",
    workflow: ["Scrape web pages and parse PDFs into usable text.", "Split and embed content, then store vectors in Pinecone.", "Retrieve relevant context for incoming questions.", "Send context to Azure OpenAI and return a sourced response through the chat interface."],
    stack: ["Apache NiFi", "Pinecone", "Azure OpenAI", "Streamlit", "Docker", "Python"],
    repository: "https://github.com/AnasBenAmor10/RAG-Chatbot-With-Nifi"
  },
  {
    id: "flight-pipeline", category: "data", type: "DATA ENGINEERING / REAL TIME", title: "Real-time Flight Data Pipeline",
    question: "How do live flight signals become a usable data stream?",
    summary: "Collect live air-traffic and airport-density data from the AirLabs API.",
    image: "img/Projects/project1.png", imageAlt: "Real-time flight data pipeline architecture", imageCaption: "AirLabs ingestion, stream processing, and delivery workflow.",
    overview: "A real-time data pipeline project centered on flight and airport-density information from AirLabs, preparing external API data for downstream processing and analysis.",
    workflow: ["Request live air-traffic and airport-density data from AirLabs.", "Process incoming records in a repeatable pipeline.", "Prepare the data for downstream analysis and use."],
    stack: ["Python", "AirLabs API", "Data pipelines"],
    repository: "https://github.com/AnasBenAmor10/Real-Time-flight-into-data-pipeline"
  },
  {
    id: "image-text-search", category: "ai", type: "AI / SEARCH", title: "Image & Text Search",
    question: "Can one search connect what you see with what you type?",
    summary: "A Dockerized search engine for exploring images and text together.",
    image: "img/Projects/project10.png", imageAlt: "Image and text search system architecture", imageCaption: "Visual feature extraction and indexed image/text search flow.",
    overview: "A high-performance image and text search project combining ElasticVGG with Elasticsearch. The interface supports search across visual and textual content.",
    workflow: ["Prepare image and text representations.", "Index searchable data with Elasticsearch.", "Query the collection and return matching content."],
    stack: ["ElasticVGG", "Elasticsearch", "Docker"],
    repository: "https://github.com/AnasBenAmor10/ImageText-Search-ElasticVGG-Docker"
  },
];

const projectDirectory = document.querySelector("#project-directory");
const projectCount = document.querySelector(".project-count span");
const filterButtons = document.querySelectorAll(".filter-button");
const projectDialog = document.querySelector("#project-dialog");
const projectFields = {
  number: document.querySelector("#doc-number"),
  reference: document.querySelector("#doc-reference-number"),
  type: document.querySelector("#doc-type"),
  title: document.querySelector("#doc-title"),
  summary: document.querySelector("#doc-summary"),
  visual: document.querySelector(".doc-visual"),
  image: document.querySelector("#doc-image"),
  caption: document.querySelector("#doc-caption"),
  overview: document.querySelector("#doc-overview"),
  workflow: document.querySelector("#doc-workflow"),
  stack: document.querySelector("#doc-stack"),
  repository: document.querySelector("#doc-repository"),
  source: document.querySelector("#doc-source")
};

const makeText = (tagName, className, text) => {
  const element = document.createElement(tagName);
  element.className = className;
  element.textContent = text;
  return element;
};

projects.forEach((project, index) => {
  const entry = document.createElement("li");
  entry.className = "project-card reveal";
  entry.dataset.category = project.category;
  entry.dataset.projectId = project.id;

  const number = makeText("span", "project-number", String(index + 1).padStart(2, "0"));
  const main = document.createElement("div");
  main.className = "project-main";
  main.append(
    makeText("span", "project-kind", project.type),
    makeText("h3", "", project.question),
    makeText("span", "project-name", project.title),
    makeText("p", "", project.summary)
  );

  const previewStack = document.createElement("div");
  previewStack.className = "project-preview-stack";
  project.stack.slice(0, 3).forEach((technology) => previewStack.append(makeText("span", "", technology)));

  const openButton = makeText("button", "project-open", "Explore dossier");
  openButton.type = "button";
  openButton.dataset.openProject = project.id;
  openButton.setAttribute("aria-haspopup", "dialog");
  entry.append(number, main, previewStack, openButton);
  projectDirectory.append(entry);
});

const updateProjectCount = () => {
  projectCount.textContent = projectDirectory.querySelectorAll(".project-card:not([hidden])").length;
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });

    projectDirectory.querySelectorAll(".project-card").forEach((card) => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
      if (!card.hidden) {
        card.classList.remove("filter-enter");
        requestAnimationFrame(() => card.classList.add("filter-enter"));
      }
    });
    updateProjectCount();
  });
});

projectDirectory.addEventListener("click", (event) => {
  const button = event.target.closest("[data-open-project]");
  if (!button) return;

  const index = projects.findIndex((project) => project.id === button.dataset.openProject);
  const project = projects[index];
  if (!project) return;

  const documentNumber = `${String(index + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;
  projectFields.number.textContent = documentNumber;
  projectFields.reference.textContent = documentNumber;
  projectFields.type.textContent = project.type;
  projectFields.title.textContent = project.title;
  projectFields.summary.textContent = project.summary;
  projectFields.visual.hidden = !project.image;
  if (project.image) {
    projectFields.image.src = project.image;
    projectFields.image.alt = project.imageAlt;
    projectFields.caption.textContent = project.imageCaption;
  } else {
    projectFields.image.removeAttribute("src");
    projectFields.image.alt = "";
    projectFields.caption.textContent = "";
  }
  projectFields.overview.textContent = project.overview;
  projectFields.workflow.replaceChildren(...project.workflow.map((step) => makeText("li", "", step)));
  projectFields.stack.replaceChildren(...project.stack.map((technology) => makeText("span", "", technology)));
  projectFields.repository.hidden = !project.repository;
  if (project.repository) projectFields.repository.href = project.repository;
  projectFields.source.textContent = project.source || "Source code and project README";
  projectDialog.showModal();
});

document.querySelector(".doc-close").addEventListener("click", () => projectDialog.close());
projectDialog.addEventListener("click", (event) => {
  if (event.target === projectDialog) projectDialog.close();
});

updateProjectCount();

const progressBar = document.querySelector(".scroll-progress span");
const backToTop = document.querySelector(".back-to-top");
let scrollTicking = false;

window.addEventListener("scroll", () => {
  if (scrollTicking) return;
  scrollTicking = true;
  requestAnimationFrame(() => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
    progressBar.style.transform = `scaleX(${scrollProgress})`;
    backToTop.classList.toggle("is-visible", window.scrollY > 500);
    scrollTicking = false;
  });
}, { passive: true });

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));