export const filters = ["All", "Students", "Reformists", "Revolutionaries", "Victims", "Society"];

export const groups: Record<string, string[]> = {
  "Simoun": ["Revolutionaries"],
  "Basilio": ["Students"],
  "Isagani": ["Students", "Reformists"],
  "Padre Florentino": ["Reformists"],
  "Kabesang Tales": ["Victims", "Revolutionaries"],
  "Juli": ["Victims"],
  "Paulita Gómez": ["Society"],
};

export const glossary = [
  { term: "Filibustero", def: "To the Spanish, a dangerous educated Filipino suspected of subversion. To Rizal and the people, a symbol of patriotism." },
  { term: "Frailocracy", def: "Rule dominated by the friars, whose religious orders held great political, economic and moral power." },
  { term: "Gomburza", def: "Fathers Gómez, Burgos and Zamora, the three priests executed in 1872. The novel is dedicated to them." },
  { term: "Cavite Mutiny", def: "The 1872 uprising at the Cavite arsenal, which the Spanish used to implicate the three priests." },
  { term: "Matanglawin", def: "The outlaw name Kabesang Tales takes after losing his land." },
  { term: "Brown Cardinal", def: "A nickname for Simoun, the hidden power behind the Captain-General's decisions." },
  { term: "Academia de Castellano", def: "The students' campaign to open a Spanish-language academy, stalled by friars and officials." },
  { term: "Cabesang", def: "A title for a village head (cabeza de barangay), as in Cabesang Tales." },
  { term: "Pomegranate lamp", def: "Simoun's wedding gift, which hides the nitroglycerin of his plot." },
];

// Paraphrased. Replace with exact lines from your edition.
export const quotes = [
  { who: "Simoun", text: "Reform has failed, and only upheaval can bring justice." },
  { who: "Padre Florentino", text: "Freedom must be earned through virtue and sacrifice, not hatred and violence." },
  { who: "Isagani", text: "Education and knowledge can lift the lives of Filipinos and change society." },
  { who: "Kabesang Tales", text: "When the courts fail the poor, a peaceful man can be pushed into rebellion." },
  { who: "Juli", text: "The powerless pay the price when those in authority abuse their position." },
];

export const nodes = [
  { id: "Simoun", short: "S", x: 320, y: 50 },
  { id: "Padre Florentino", short: "PF", x: 530, y: 130 },
  { id: "Isagani", short: "I", x: 520, y: 290 },
  { id: "Paulita Gómez", short: "PG", x: 400, y: 360 },
  { id: "Kabesang Tales", short: "KT", x: 230, y: 340 },
  { id: "Juli", short: "J", x: 90, y: 280 },
  { id: "Basilio", short: "B", x: 100, y: 120 },
];

export const edges = [
  { a: "Simoun", b: "Basilio", label: "recruits" },
  { a: "Simoun", b: "Kabesang Tales", label: "ally" },
  { a: "Simoun", b: "Padre Florentino", label: "confesses to" },
  { a: "Basilio", b: "Juli", label: "sweethearts" },
  { a: "Juli", b: "Kabesang Tales", label: "father and daughter" },
  { a: "Isagani", b: "Paulita Gómez", label: "sweethearts" },
  { a: "Isagani", b: "Padre Florentino", label: "nephew and uncle" },
  { a: "Basilio", b: "Isagani", label: "fellow students" },
];