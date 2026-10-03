
export const sections = [
  { id: "hero", label: "Home", icon: "Home" },
  { id: "explore", label: "Explore", icon: "Compass" },
  { id: "roster", label: "Characters", icon: "Users" },
  { id: "timeline", label: "Plot Timeline", icon: "GitCommitVertical" },
  { id: "history", label: "History", icon: "Landmark", href: "/history" },
  { id: "chapters", label: "Chapters", icon: "BookOpen" },
  { id: "themes", label: "Themes", icon: "Lightbulb" },
  { id: "compare", label: "Noli vs. Fili", icon: "Columns2" },
  { id: "quiz", label: "Quiz", icon: "HelpCircle" },

] as const;

export const events = [
  { title: "The Steamer Tabo", text: "Simoun, the mysterious jeweler, travels the Pasig and is revealed to the reader as a figure of influence and quiet menace." },
  { title: "Cabesang Tales Dispossessed", text: "Friars seize the farmer's hard-won land. Driven to despair, he joins bandits, and Simoun takes his revolver as a pledge." },
  { title: "The Academia de Castellano", text: "Students petition to teach Spanish. Friar opposition and bureaucratic delay kill the project and radicalise the young." },
  { title: "The Wedding Feast", text: "Simoun hides a nitroglycerin bomb in a pomegranate lamp. Isagani sees the plot and hurls the lamp into the river." },
  { title: "Simoun's Last Confession", text: "Wounded, Simoun dies at Padre Florentino's seaside house. The priest casts his jewels into the sea, trusting the future to the worthy." },
];

export const questions = [
  { q: "Who is Simoun really?", a: ["Crisóstomo Ibarra", "Elías", "Basilio", "Padre Salví"], c: 0 },
  { q: "What did Simoun conceal inside the pomegranate lamp?", a: ["Gold coins", "Nitroglycerin", "A letter", "Gunpowder kegs"], c: 1 },
  { q: "Who throws the lamp into the river?", a: ["Basilio", "Padre Florentino", "Isagani", "Cabesang Tales"], c: 2 },
  { q: "Where does Simoun die?", a: ["Bilibid Prison", "Padre Florentino's house", "The Tabo steamer", "Manila Cathedral"], c: 1 },
  { q: "Which theme dominates the novel's critique of colonial rule?", a: ["Corruption and failed reform", "Frontier exploration", "Industrial progress", "Religious tolerance"], c: 0 },
];
export const characters = [
  { name: "Simoun", role: "The Jeweler", image: "/Simoun.png",
    bio: "Simoun represents an idealist who loses hope in reform, then turns to his riches and the urge for revolution as instruments to pursue justice. A betrayed dreamer, he is the colonial aristocrat whose wealth masks radical schemes, and the 'Brown Cardinal' behind the Captain-General's decisions, exposing the fragility of the greed shaping colonial governance. His journey illustrates the collapse of idealism when oppression breeds violent resistance.",
    modern: "Simoun's radicalism resonates with citizens weary of injustice, inequality, and failed reforms. Yet his downfall teaches the limits of violent retaliation, which cannot sustain liberty. Many Filipinos who await justice are torn between revenge and integrity, and his story shows the risks of destruction and the need to address systemic injustice with principle and morality." },
  { name: "Basilio", role: "The Medical Student", image: "/Basilio.png",
    bio: "Basilio represents the Filipino youth who experienced poverty, injustice, and struggle under Spanish rule. A hardworking and intelligent student who wants to become a doctor, his views change after his imprisonment and the loss of Juli. He represents educated Filipinos of the 19th century who hoped to improve their lives through education but still faced an unfair colonial system.",
    modern: "Basilio connects to Filipino students today who work hard to finish their education despite financial problems. Like him, many see education as a way to a better future and to help their families. His story reminds us that education can improve lives, but it is also important to recognize and speak up about injustice in society." },
  { name: "Isagani", role: "The Idealist Poet", image: "/Isagani.png",
    bio: "Isagani represents the educated, idealistic Filipino youth of the colonial period. He believes education and knowledge can improve the lives of Filipinos and bring positive change, and he is passionate enough about his country to stand up for what is right. Unlike Simoun, he believes in peaceful reform and education rather than violence.",
    modern: "Isagani connects to Filipino youth today who use their voices and education to speak out on social issues and fight injustice, through organizations, discussions, social media campaigns, and peaceful protests. He shows that young people can contribute to society by being informed and willing to stand for what they believe is right." },
  { name: "Padre Florentino", role: "The Moral Conscience", image: "/PadreFlorentino.png",
    bio: "Padre Florentino represents wisdom, morality, patriotism, and the belief that true freedom should be achieved through peaceful and honorable means. A Filipino priest and Isagani's uncle, he is kind and thoughtful, unlike the corrupt priests in the novel. When Simoun seeks refuge in his home and confesses his plans and failures, Florentino rejects violence and revenge, believing freedom comes through virtue, education, sacrifice, and love for country.",
    modern: "Padre Florentino connects to people who stand for what is right even when society faces corruption and abuse of power. His character shows that wanting change is not enough; the methods matter too. His rejection of violence relates to modern efforts to solve social problems through peaceful action, education, and responsible leadership, without sacrificing morality and human dignity." },
  { name: "Kabesang Tales", role: "The Dispossessed Farmer", image: "/KabesangTales.png",
    bio: "Kabesang Tales is a tragic example of a hardworking Filipino pushed to the edge by an unfair system. A farmer who clears forest land to secure his family's future, he loses it when the friars claim the land and demand ever higher rent. The court is biased against the poor, and stripped of his land and savings, with his daughter Juli forced into servitude, he becomes the violent rebel known as Matanglawin.",
    modern: "His story parallels the struggles of Filipino farmers and marginalized communities facing land disputes and systemic inequality. When people feel abandoned by the government and see no effective legal way to protect what is rightfully theirs, they may be pushed toward desperate actions. True peace is impossible without fairness, and justice must apply equally to everyone." },
  { name: "Juli", role: "The Sacrificed Daughter", image: "/Juli.png",
    bio: "Juli represents people who suffer from injustice, poverty, and abuse of power. Her family fell into hardship because of the land conflict with the friars, and she was forced to work to help her father and her fiancé even though she wanted to pursue her education. She sought help from Padre Camorra but was taken advantage of instead.",
    modern: "Her situation is seen today in land conflicts and in people who give up education or accept underpaid work to support their families. Her story also speaks to those who face harassment or exploitation from people they trusted, and reminds us to protect people's dignity, hold those in power accountable, and give vulnerable people a safe way to seek help." },
  { name: "Paulita Gómez", role: "The Pragmatic Beloved", image: "/PaulitaGomez.png",
    bio: "Paulita Gómez represents beauty, wealth, social status, and the influence of society on personal choices. The niece of Doña Victorina, she is the girlfriend of the idealistic Isagani, but she leaves him and marries Juanito Pelaez, who comes from a wealthy family.",
    modern: "Paulita connects to people who feel pressured to choose financial security, comfort, or social status over personal feelings or ideals. The contrast between Isagani's idealism and her practical view of life reminds us that personal decisions are shaped by the society around us, especially when wealth and status are considered important." },
];

export const slugOf = (name: string) =>
  name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "");