import type { RoadmapItem } from "@/types";

export const roadmapItems: RoadmapItem[] = [
  { id: "deep-learning", title: "Deep Learning", status: "in-progress", category: "Core AI" },
  { id: "cnn", title: "CNN", status: "in-progress", category: "Core AI" },
  { id: "rnn", title: "RNN", status: "in-progress", category: "Core AI" },
  { id: "transformers", title: "Transformers", status: "upcoming", category: "Core AI" },
  { id: "pytorch", title: "PyTorch", status: "upcoming", category: "Frameworks" },
  { id: "tensorflow", title: "TensorFlow", status: "upcoming", category: "Frameworks" },
  { id: "langchain", title: "LangChain", status: "upcoming", category: "GenAI" },
  { id: "rag", title: "RAG Systems", status: "upcoming", category: "GenAI" },
  { id: "mlops", title: "MLOps", status: "upcoming", category: "Infrastructure" },
  { id: "docker", title: "Docker", status: "upcoming", category: "Infrastructure" },
  { id: "kubernetes", title: "Kubernetes", status: "upcoming", category: "Infrastructure" },
];
