import {Message} from "../types";

const responses = {
  anatomy: [
    "The human body has several organ systems working together. Each system has specific functions that support life. Would you like me to explain a particular system in detail?",
    "Anatomical structures are organized hierarchically: cells → tissues → organs → organ systems → organism. Which level interests you most?",
    "Understanding anatomical terminology is crucial. We use directional terms like anterior/posterior, superior/inferior, and medial/lateral to describe locations.",
  ],
  physiology: [
    "Physiology studies how body systems function. For example, the cardiovascular system pumps blood to deliver oxygen and nutrients throughout the body.",
    "Homeostasis is key to physiological function - the body maintains stable internal conditions despite external changes.",
    "Physiological processes often involve feedback loops. Negative feedback maintains stability, while positive feedback amplifies responses.",
  ],
  cardiology: [
    "The heart has four chambers: two atria (upper chambers) and two ventricles (lower chambers). The right side pumps blood to the lungs, while the left side pumps to the body.",
    "The cardiac cycle consists of diastole (relaxation/filling) and systole (contraction/pumping). This creates the heartbeat rhythm.",
    "Common cardiovascular conditions include hypertension, coronary artery disease, heart failure, and arrhythmias.",
  ],
  respiratory: [
    "The respiratory system facilitates gas exchange - bringing oxygen in and removing carbon dioxide. This occurs in the alveoli of the lungs.",
    "Breathing is controlled by the respiratory center in the medulla, responding to CO2 levels in the blood.",
    "Common respiratory conditions include asthma, COPD, pneumonia, and lung cancer.",
  ],
  nervous: [
    "The nervous system has two main divisions: central (brain and spinal cord) and peripheral (nerves throughout the body).",
    "Neurons communicate through electrical and chemical signals. Action potentials travel along axons, and neurotransmitters cross synapses.",
    "The brain has specialized regions: cerebrum for thinking, cerebellum for coordination, and brainstem for vital functions.",
  ],
  pathology: [
    "Pathology studies disease processes. We examine etiology (causes), pathogenesis (development), and clinical manifestations.",
    "Inflammation is a common response to tissue injury, characterized by redness, swelling, heat, pain, and loss of function.",
    "Understanding normal anatomy and physiology is essential for recognizing pathological changes.",
  ],
  pharmacology: [
    "Pharmacology studies drug actions in the body. We consider pharmacokinetics (what the body does to drugs) and pharmacodynamics (what drugs do to the body).",
    "Drug absorption, distribution, metabolism, and excretion (ADME) determine drug effectiveness and duration.",
    "Always consider drug interactions, contraindications, and adverse effects when prescribing medications.",
  ],
  blood: [
    "Blood consists of plasma (liquid portion) and formed elements (red blood cells, white blood cells, and platelets).",
    "Red blood cells contain hemoglobin to carry oxygen. White blood cells fight infection. Platelets help with clotting.",
    "Blood typing is important for transfusions. The ABO and Rh systems are the most clinically significant.",
  ],
  default: [
    "That's an interesting medical question! Could you provide more specific details so I can give you a more targeted explanation?",
    "I'd be happy to help explain that medical concept. Medical knowledge builds upon understanding normal anatomy and physiology first.",
    "Great question! In medicine, it's important to consider multiple factors when analyzing any condition or process.",
  ],
} as const;

const findMessageKey = (message: string): keyof typeof responses => {
  const lowerMessage = message.toLowerCase();

  if (
    lowerMessage.includes("heart") ||
    lowerMessage.includes("cardiac") ||
    lowerMessage.includes("cardio")
  ) {
    return "cardiology";
  } else if (
    lowerMessage.includes("lung") ||
    lowerMessage.includes("respiratory") ||
    lowerMessage.includes("breathing")
  ) {
    return "respiratory";
  } else if (
    lowerMessage.includes("brain") ||
    lowerMessage.includes("nervous") ||
    lowerMessage.includes("neuron")
  ) {
    return "nervous";
  } else if (lowerMessage.includes("anatomy") || lowerMessage.includes("structure")) {
    return "anatomy";
  } else if (lowerMessage.includes("physiology") || lowerMessage.includes("function")) {
    return "physiology";
  } else if (
    lowerMessage.includes("disease") ||
    lowerMessage.includes("pathology") ||
    lowerMessage.includes("condition")
  ) {
    return "pathology";
  } else if (
    lowerMessage.includes("drug") ||
    lowerMessage.includes("medication") ||
    lowerMessage.includes("pharmacology")
  ) {
    return "pharmacology";
  } else if (lowerMessage.includes("blood") || lowerMessage.includes("hematology")) {
    return "blood";
  }

  return "default";
};

export const generateMockResponse = (userMessage: string): string => {
  const messageKey = findMessageKey(userMessage);
  const relevantResponses = responses[messageKey];

  return relevantResponses[Math.floor(Math.random() * relevantResponses.length)];
};

export const generateChatTitle = (firstMessage: string): string => {
  if (firstMessage.length > 50) {
    return firstMessage.slice(0, 50) + "...";
  }

  return firstMessage;
};

export const formatChatDate = (date: Date): string => {
  const now = new Date();
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));

  if (diffInHours < 1) {
    return "Just now";
  } else if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours > 1 ? "s" : ""} ago`;
  } else {
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInDays < 7) {
      return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`;
    } else {
      return date.toLocaleDateString();
    }
  }
};

export const quickQuestions = [
  "İnsan kalbi nasıl çalışır?",
  "Akciğerlerin temel işlevleri nelerdir?",
  "Beyin ve sinir sistemi nasıl iletişim kurar?",
  "Vücuttaki ana organ sistemleri nelerdir?",
];

export const createWelcomeMessage = (): Message => ({
  id: "1",
  content:
    "Hello! I'm your AI medical study assistant. I can help you understand medical concepts, explain procedures, review symptoms, and answer questions about anatomy, physiology, pathology, and more. What would you like to learn about today?",
  role: "assistant",
  timestamp: new Date(),
});
