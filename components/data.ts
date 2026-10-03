
export const sections = [
  { id: "hero", label: "Home", icon: "Home" },
  { id: "roster", label: "Characters", icon: "Users" },
  { id: "timeline", label: "Timeline", icon: "GitCommitVertical" },
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
    bio: "Crisóstomo Ibarra returned in disguise as a wealthy jeweler and confidant of the Captain-General. Embittered by the failure of reform, he plots a violent revolution, using his wealth to deepen corruption so the people will rise.",
    modern: "Simoun mirrors the insider who exploits a broken system to topple it. His story asks whether ends can justify means when institutions refuse to change." },
  { name: "Basilio", role: "The Medical Student", image: "/Basilio.png",
    bio: "Son of Sisa, now a diligent medical student. Wrongly jailed after the Academia plot, he is recruited by Simoun, whose offer he finally accepts.",
    modern: "Basilio embodies the scholarship student carrying family trauma, caught between personal survival and collective struggle." },
  { name: "Isagani", role: "The Idealist Poet", image: "/Isagani.png",
    bio: "A poet and nephew of Padre Florentino. He believes in peaceful reform and, at the climax, throws Simoun's lamp into the river to save the guests, though Paulita is among them.",
    modern: "Isagani is the young advocate who still believes in dialogue, and the cost of principle when it collides with love." },
  { name: "Padre Florentino", role: "The Moral Conscience", image: "/PadreFlorentino.png",
    bio: "A retired priest and the novel's moral anchor. He shelters the dying Simoun and, after hearing his confession, offers a vision of liberty earned through suffering and virtue.",
    modern: "Florentino speaks for principled patience: that lasting change needs moral renewal, not only force." },
  { name: "Kabesang Tales", role: "The Dispossessed Farmer", image: "/KabesangTales.png",
    bio: "Telesforo Juan de Dios, a farmer who cleared and tilled his land, only to have it seized by the friars. Ruined and bitter, he becomes the outlaw Matanglawin and joins Simoun's cause.",
    modern: "His story echoes every farmer pushed off land by powerful interests, and shows how injustice can turn a law-abiding citizen into a rebel." },
  { name: "Juli", role: "The Sacrificed Daughter", image: "/Juli.png",
    bio: "Kabesang Tales's daughter and Basilio's sweetheart. To raise her father's ransom she becomes a servant, and when pursued by Padre Camorra she leaps from a window to her death.",
    modern: "Juli stands for those who bear the cost of other people's debts and abuses of power, and for dignity chosen over submission." },
  { name: "Paulita Gómez", role: "The Pragmatic Beloved", image: "/PaulitaGomez.png",
    bio: "Isagani's sweetheart, who ends up marrying the opportunist Juanito Pelaez. Her wedding feast is the setting for Simoun's failed plot.",
    modern: "Paulita shows the pull of security and status over idealism, and how personal choices reflect the pressures of the era." },
];

export const slugOf = (name: string) =>
  name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "");