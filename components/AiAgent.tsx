"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const WHATSAPP_NUMBER = "+960 793 7512";
const WHATSAPP_URL = `https://wa.me/9607937512?text=${encodeURIComponent(
  "Hello Dr. Alaa, I'd like to ask about a treatment."
)}`;

type Sender = "bot" | "user";
type Message = {
  id: string;
  sender: Sender;
  text: string;
  showWhatsAppCta?: boolean;
};

type Lang = "en" | "ar" | "fr" | "es" | "ru" | "other";

// ---------------------- Language detection ----------------------

function detectLang(text: string): Lang {
  // Script-based detection (most reliable)
  if (/[؀-ۿ]/.test(text)) return "ar";
  if (/[Ѐ-ӿ]/.test(text)) return "ru";
  // Latin-based — keyword detection
  const t = text.toLowerCase();
  if (
    /\b(bonjour|salut|merci|réserver|rendez-vous|prix|où|quand|combien|comment|tarif|horaires?|aujourd'hui|botox|filler|peau|cheveux)\b/.test(
      t
    )
  )
    return "fr";
  if (
    /\b(hola|gracias|reserva|reservar|cita|precio|dónde|cuándo|cuánto|cómo|horario|hoy|piel|cabello|cuanto|precios)\b/.test(
      t
    )
  )
    return "es";
  // Default: assume English (covers most romance/germanic that share roots)
  return "en";
}

// ---------------------- Response library ----------------------

type Intent =
  | "greeting"
  | "booking"
  | "price"
  | "location"
  | "hours"
  | "services"
  | "botox"
  | "filler"
  | "exosomes"
  | "microneedling"
  | "peel"
  | "laser"
  | "contact"
  | "about"
  | "safety"
  | "identity"
  | "thanks"
  | "default";

const RESPONSES: Record<Lang, Partial<Record<Intent, string>>> = {
  en: {
    greeting:
      "Hi there 🌸 I'm Layan, an AI assistant for Dr. Alaa's clinic. How can I help today? For booking and personal advice, the team replies fastest on WhatsApp.",
    booking:
      "Lovely — appointments are arranged on WhatsApp ✨ Dr. Alaa's team replies same-day and will find a time that suits you.",
    price:
      "Pricing is always tailored after a quick consultation — every plan is personal. The team can share a quote on WhatsApp 💫",
    location:
      "The clinic is at Life Care Medical Center, Hulhumalé, Maldives 🌴 Dr. Alaa also practises in Egypt. For directions or to book, WhatsApp is fastest.",
    hours:
      "We're open every day from 6:00 PM to 11:00 PM, by appointment 🌙 To reserve a time, please message on WhatsApp — same-day reply.",
    services:
      "Dr. Alaa specialises in aesthetic dermatology 🌸 Botox, dermal fillers, microneedling, exosomes for hair, chemical peels, lasers, and pigmentation care.",
    botox:
      "Yes — anti-wrinkle injections (Botox) for frown lines, forehead, and crow's feet are one of Dr. Alaa's signature treatments ✨ For dosing and a personal plan, WhatsApp is best.",
    filler:
      "Yes — dermal filler for lips, cheeks, chin, and jawline is offered with restraint and a natural, soft result 🌸 For a tailored plan, please message on WhatsApp.",
    exosomes:
      "Yes — exosomes for hair restoration is one of the clinic's most-requested regenerative treatments 💫 For candidacy and pricing, please message on WhatsApp.",
    microneedling:
      "Yes — microneedling with serums and growth factors is performed regularly ✨ For session planning and a price, please message on WhatsApp.",
    peel: "Yes — chemical peels and medical facials are part of the skin rejuvenation menu 🌸 For the right peel depth for your skin, please message on WhatsApp.",
    laser:
      "Yes — laser, IPL, and pigmentation, melasma, and acne management are available, always after a careful skin assessment. To start a plan, please message on WhatsApp ✨",
    contact: `WhatsApp and calls: ${WHATSAPP_NUMBER}. Instagram: @dr.alaazidan. Same-day replies, always 🌸`,
    about:
      "Dr. Alaa Zidan is an aesthetic and medical doctor with 5+ years of experience in aesthetic dermatology, practising in the Maldives and Egypt ✨",
    safety:
      "Every treatment begins with a thorough medical assessment, so safety and comfort always come first 🌸 Specifics depend on your skin — the team will walk you through it on WhatsApp.",
    identity:
      "I'm Layan, an AI assistant for Dr. Alaa's clinic 🌸 For real conversations and bookings, the team is one tap away on WhatsApp.",
    thanks:
      "You're very welcome ✨ Whenever you're ready, the team is right there on WhatsApp.",
    default:
      "I'm not sure I have the perfect answer for that 🌸 For anything specific, please message Dr. Alaa's team on WhatsApp — they reply same-day.",
  },
  ar: {
    greeting:
      "أهلاً 🌸 أنا ليان، مساعدة ذكاء اصطناعي في عيادة د. آلاء. كيف يمكنني مساعدتك؟ للحجز والاستفسارات الشخصية، فريقنا يرد بسرعة على واتساب.",
    booking:
      "بكل سرور — يتم تنسيق المواعيد عبر واتساب ✨ فريق د. آلاء يرد في نفس اليوم ويختار لك وقتاً مناسباً.",
    price:
      "الأسعار تُحدد بعد استشارة قصيرة لأن كل خطة شخصية. الفريق يقدر يعطيك التسعيرة على واتساب 💫",
    location:
      "العيادة في Life Care Medical Center، هولهومالي، جزر المالديف 🌴 ود. آلاء تعمل أيضاً في مصر. للاتجاهات أو الحجز، واتساب أسرع طريقة.",
    hours:
      "نفتح يومياً من ٦ مساءً إلى ١١ مساءً، بموعد مسبق 🌙 لحجز وقت، تواصلي معنا على واتساب — رد في نفس اليوم.",
    services:
      "تختصّ د. آلاء في طب الجلدية التجميلية 🌸 بوتوكس، فيلر، ميكرونيدلينج، إكسوسومز للشعر، تقشير كيميائي، ليزر، وعلاج التصبغات.",
    botox:
      "نعم — حقن البوتوكس لخطوط الجبهة والحاجبين وقدم الغراب من أبرز علاجات د. آلاء ✨ للتفاصيل والجرعة المناسبة، الأفضل التواصل على واتساب.",
    filler:
      "نعم — فيلر الشفايف والخدود والذقن وخط الفك يُقدّم بشكل طبيعي وهادئ 🌸 للخطة المناسبة لك، راسلينا على واتساب.",
    exosomes:
      "نعم — إكسوسومز لاستعادة الشعر من أكثر علاجاتنا التجديدية طلباً 💫 لمعرفة مدى ملاءمته لك والأسعار، تواصلي على واتساب.",
    microneedling:
      "نعم — جلسات الميكرونيدلينج مع السيروم وعوامل النمو متاحة بانتظام ✨ لجدولة الجلسات والسعر، تواصلي معنا على واتساب.",
    peel: "نعم — التقشير الكيميائي والتنظيف الطبي ضمن قائمة تجديد البشرة 🌸 لتحديد عمق التقشير المناسب لبشرتك، الأفضل التواصل على واتساب.",
    laser:
      "نعم — الليزر والـIPL وعلاج التصبغات والميلازما وحب الشباب متاحة، دائماً بعد تقييم دقيق للبشرة. لبدء الخطة، راسلينا على واتساب ✨",
    contact: `واتساب واتصال: ${WHATSAPP_NUMBER}. انستجرام: @dr.alaazidan. رد في نفس اليوم 🌸`,
    about:
      "د. آلاء زيدان طبيبة تجميل وجلدية بخبرة تزيد عن ٥ سنوات في طب الجلدية التجميلية، وتعمل بين جزر المالديف ومصر ✨",
    safety:
      "كل علاج يبدأ بتقييم طبي شامل حتى تكون السلامة والراحة في المقام الأول 🌸 التفاصيل تختلف حسب بشرتك — الفريق يشرح لك بالتفصيل على واتساب.",
    identity:
      "أنا ليان، مساعدة ذكاء اصطناعي في عيادة د. آلاء 🌸 للتواصل المباشر والحجز، الفريق متاح على واتساب.",
    thanks: "العفو ✨ في أي وقت تكوني جاهزة، الفريق على واتساب.",
    default:
      "لست متأكدة من الإجابة الدقيقة على هذا السؤال 🌸 لأي استفسار محدد، الأفضل التواصل مع فريق د. آلاء على واتساب — رد في نفس اليوم.",
  },
  fr: {
    greeting:
      "Bonjour 🌸 Je suis Layan, une assistante virtuelle de la clinique du Dr Alaa. Comment puis-je vous aider ? Pour les rendez-vous et conseils personnels, l'équipe répond le plus vite sur WhatsApp.",
    booking:
      "Avec plaisir — les rendez-vous se prennent sur WhatsApp ✨ L'équipe du Dr Alaa répond le jour même.",
    price:
      "Les tarifs sont toujours adaptés après une courte consultation — chaque plan est personnel. L'équipe peut vous donner un devis sur WhatsApp 💫",
    location:
      "La clinique se trouve à Life Care Medical Center, Hulhumalé, Maldives 🌴 Dr Alaa exerce aussi en Égypte. Pour l'itinéraire ou un rendez-vous, WhatsApp est le plus rapide.",
    hours:
      "Nous sommes ouverts tous les jours de 18h à 23h, sur rendez-vous 🌙 Pour réserver, écrivez-nous sur WhatsApp.",
    services:
      "Le Dr Alaa est spécialisée en dermatologie esthétique 🌸 Botox, fillers, microneedling, exosomes pour cheveux, peelings, lasers, pigmentation.",
    contact: `WhatsApp et appels : ${WHATSAPP_NUMBER}. Instagram : @dr.alaazidan. Réponse le jour même 🌸`,
    about:
      "Le Dr Alaa Zidan est médecin esthétique avec plus de 5 ans d'expérience en dermatologie esthétique, exerçant aux Maldives et en Égypte ✨",
    identity:
      "Je suis Layan, une assistante IA pour la clinique du Dr Alaa 🌸 Pour une vraie conversation, l'équipe est disponible sur WhatsApp.",
    thanks: "Avec plaisir ✨ Quand vous êtes prête, l'équipe est sur WhatsApp.",
    default:
      "Je ne suis pas sûre d'avoir la bonne réponse 🌸 Pour toute question spécifique, écrivez à l'équipe du Dr Alaa sur WhatsApp — réponse le jour même.",
  },
  es: {
    greeting:
      "Hola 🌸 Soy Layan, una asistente de IA de la clínica de la Dra. Alaa. ¿Cómo puedo ayudarle hoy? Para reservas y consultas personales, el equipo responde más rápido por WhatsApp.",
    booking:
      "Con mucho gusto — las citas se gestionan por WhatsApp ✨ El equipo de la Dra. Alaa responde el mismo día.",
    price:
      "Los precios siempre se adaptan tras una breve consulta, porque cada plan es personal. El equipo puede darle un presupuesto por WhatsApp 💫",
    location:
      "La clínica está en Life Care Medical Center, Hulhumalé, Maldivas 🌴 La Dra. Alaa también atiende en Egipto. Para indicaciones o reservar, WhatsApp es lo más rápido.",
    hours:
      "Abrimos todos los días de 18:00 a 23:00, con cita previa 🌙 Para reservar, escríbenos por WhatsApp.",
    services:
      "La Dra. Alaa está especializada en dermatología estética 🌸 Bótox, rellenos, microneedling, exosomas para cabello, peelings, láser y pigmentación.",
    contact: `WhatsApp y llamadas: ${WHATSAPP_NUMBER}. Instagram: @dr.alaazidan. Respuesta el mismo día 🌸`,
    about:
      "La Dra. Alaa Zidan es médica estética con más de 5 años de experiencia en dermatología estética, atendiendo en Maldivas y Egipto ✨",
    identity:
      "Soy Layan, una asistente de IA para la clínica de la Dra. Alaa 🌸 Para hablar con una persona, el equipo está en WhatsApp.",
    thanks: "De nada ✨ Cuando esté lista, el equipo está en WhatsApp.",
    default:
      "No estoy segura de tener la respuesta exacta 🌸 Para cualquier consulta específica, escriba al equipo de la Dra. Alaa por WhatsApp — respuesta el mismo día.",
  },
  ru: {
    greeting:
      "Здравствуйте 🌸 Я Лаян, ИИ-ассистент клиники доктора Алаа. Чем могу помочь? Для записи и личных консультаций команда быстрее всего отвечает в WhatsApp.",
    booking:
      "С удовольствием — запись на приём происходит через WhatsApp ✨ Команда доктора Алаа отвечает в тот же день.",
    price:
      "Цены всегда индивидуальны после короткой консультации. Команда сможет назвать стоимость в WhatsApp 💫",
    location:
      "Клиника находится в Life Care Medical Center, Хулхумале, Мальдивы 🌴 Доктор Алаа также принимает в Египте. Самый быстрый способ записаться — WhatsApp.",
    hours:
      "Мы открыты ежедневно с 18:00 до 23:00, по записи 🌙 Чтобы забронировать время, напишите в WhatsApp.",
    services:
      "Доктор Алаа специализируется на эстетической дерматологии 🌸 Ботокс, филлеры, микронидлинг, экзосомы для волос, химические пилинги, лазеры, лечение пигментации.",
    contact: `WhatsApp и звонки: ${WHATSAPP_NUMBER}. Instagram: @dr.alaazidan. Ответ в тот же день 🌸`,
    about:
      "Доктор Алаа Зидан — врач эстетической медицины с опытом более 5 лет, ведёт приём на Мальдивах и в Египте ✨",
    identity:
      "Я Лаян, ИИ-ассистент клиники доктора Алаа 🌸 Для реального общения команда доступна в WhatsApp.",
    thanks:
      "Пожалуйста ✨ Когда будете готовы — команда в WhatsApp.",
    default:
      "Не уверена, что у меня есть точный ответ 🌸 По любому конкретному вопросу напишите команде доктора Алаа в WhatsApp — ответ в тот же день.",
  },
  other: {
    default:
      "Hi 🌸 I'm Layan, the clinic's AI assistant. For help in your language, please message Dr. Alaa's team on WhatsApp at +960 793 7512 — they reply same-day and can chat in your language.",
  },
};

// ---------------------- Intent detection per language ----------------------

const INTENT_PATTERNS: Record<Lang, [Intent, RegExp][]> = {
  en: [
    ["greeting", /^(hi|hello|hey|salam|assalam|good (morning|afternoon|evening))\b/i],
    ["booking", /\b(book|appointment|schedule|reservation|consult|consultation|reserve)\b/i],
    ["price", /\b(price|cost|fee|how much|pricing|rate|expensive|cheap|charge)\b/i],
    ["location", /\b(where|location|address|directions|map|clinic|hulhumal|maldives|egypt)\b/i],
    ["hours", /\b(hour|time|open|close|when|availability|today|tomorrow|monday|tuesday|wednesday|thursday|friday|saturday|sunday|weekend)\b/i],
    ["services", /\b(service|treatment|offer|what.+do|menu|list|procedure)\b/i],
    ["botox", /\b(botox|wrinkle|frown|forehead|crow)\b/i],
    ["filler", /\b(filler|lip|cheek|chin|jawline|hyaluronic)\b/i],
    ["exosomes", /\b(exosome|hair|hair loss|balding|thinning)\b/i],
    ["microneedling", /\b(microneedling|dermapen|collagen|elastin|texture)\b/i],
    ["peel", /\b(peel|chemical|exfoliat|facial)\b/i],
    ["laser", /\b(laser|ipl|pigment|melasma|acne)\b/i],
    ["contact", /\b(contact|phone|number|call|whatsapp|email|reach)\b/i],
    ["about", /\b(who|about|experience|dr\.?|doctor|alaa|zidan|background|qualification)\b/i],
    ["safety", /\b(safe|pain|hurt|side effect|recovery|downtime|risk|complication)\b/i],
    ["identity", /\b(human|bot|robot|ai|real person|are you|who are you|your name|layan)\b/i],
    ["thanks", /\b(thank|thanks|cheers|appreciate)\b/i],
  ],
  ar: [
    ["greeting", /(مرحبا|السلام|اهلا|أهلا|صباح|مساء|هلا)/],
    ["booking", /(حجز|موعد|احجز|أحجز|أحجزي|كشف|استشارة)/],
    ["price", /(سعر|تكلفة|كم|أسعار|اسعار|بكم|تكاليف)/],
    ["location", /(وين|أين|عنوان|موقع|فين|المالديف|مصر|هولهومالي)/],
    ["hours", /(مواعيد|متى|تفتح|تفتحون|مفتوح|ساعات|الأحد|الإثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/],
    ["services", /(خدمات|علاج|علاجات|قائمة|تقدمون|تقدمي)/],
    ["botox", /(بوتوكس|تجاعيد|جبهة|الجبهة|أخدود)/],
    ["filler", /(فيلر|شفايف|شفاه|خد|خدود|ذقن|فك)/],
    ["exosomes", /(اكسوسوم|إكسوسوم|شعر|تساقط|صلع)/],
    ["microneedling", /(ميكرونيدلينج|نيدلينج|كولاجين|ملمس)/],
    ["peel", /(تقشير|كيميائي|تنظيف|فيشل)/],
    ["laser", /(ليزر|تصبغ|تصبغات|كلف|ميلازما|حب الشباب)/],
    ["contact", /(تواصل|تواصلي|رقم|اتصال|هاتف|واتس)/],
    ["about", /(من هي|من هو|عن|الدكتورة|د\.?|دكتورة|آلاء|الاء|زيدان|خبرة)/],
    ["safety", /(آمن|أمان|ألم|الم|أعراض|نقاهة|مخاطر)/],
    ["identity", /(انت|أنت|من انتي|من أنتي|بوت|ذكاء اصطناعي|روبوت|اسمك|ليان)/],
    ["thanks", /(شكر|شكرا|شكراً|متشكر|متشكرة)/],
  ],
  fr: [
    ["greeting", /^(bonjour|salut|coucou|bonsoir)\b/i],
    ["booking", /\b(réserv|rendez-vous|prendre rendez)\b/i],
    ["price", /\b(prix|tarif|combien|coût|cout)\b/i],
    ["location", /\b(où|adresse|emplacement|clinique|maldives|égypte|hulhumal)\b/i],
    ["hours", /\b(horaires?|heure|ouvert|quand|aujourd)\b/i],
    ["services", /\b(service|traitement|soin|menu)\b/i],
    ["contact", /\b(contact|téléphone|appel|whatsapp|email)\b/i],
    ["about", /\b(qui|docteur|dr|alaa|zidan|expérience)\b/i],
    ["identity", /\b(robot|bot|ia|intelligence artificielle|qui es|votre nom|layan)\b/i],
    ["thanks", /\b(merci|merci beaucoup|remercie)\b/i],
  ],
  es: [
    ["greeting", /^(hola|buenos días|buenas tardes|buenas noches)\b/i],
    ["booking", /\b(reserv|cita|agendar)\b/i],
    ["price", /\b(precio|cuánto|cuanto|cuesta|tarifa)\b/i],
    ["location", /\b(dónde|donde|dirección|clínica|maldivas|egipto|hulhumal)\b/i],
    ["hours", /\b(horario|hora|abierto|abre|cuándo|cuando|hoy)\b/i],
    ["services", /\b(servicio|tratamiento|menú|menu)\b/i],
    ["contact", /\b(contacto|teléfono|telefono|llamada|whatsapp|correo)\b/i],
    ["about", /\b(quién|quien|doctora|dra|alaa|zidan|experiencia)\b/i],
    ["identity", /\b(robot|bot|ia|inteligencia artificial|quién eres|quien eres|tu nombre|layan)\b/i],
    ["thanks", /\b(gracias|muchas gracias|agradezco)\b/i],
  ],
  ru: [
    ["greeting", /^(привет|здравствуйте|добрый день|добрый вечер|здравствуй)/i],
    ["booking", /(запис|прием|приём|консультац|бронир)/i],
    ["price", /(цен|стоимость|сколько|тариф)/i],
    ["location", /(где|адрес|клиника|мальдивы|египет|хулхумал)/i],
    ["hours", /(часы|время|работа|работаете|открыт|сегодня)/i],
    ["services", /(услуг|процедур|лечен|меню)/i],
    ["contact", /(контакт|телефон|звон|whatsapp|email|почт)/i],
    ["about", /(кто|доктор|алаа|зидан|опыт)/i],
    ["identity", /(бот|робот|ии|искусственн|тебя зовут|твоё имя|ваше имя|лаян)/i],
    ["thanks", /(спасибо|благодарю)/i],
  ],
  other: [],
};

function intentReplyMulti(input: string): {
  text: string;
  showWhatsAppCta: boolean;
  lang: Lang;
} {
  const lang = detectLang(input);
  const patterns = INTENT_PATTERNS[lang] ?? [];
  const responses = RESPONSES[lang] ?? RESPONSES.en;

  for (const [intent, regex] of patterns) {
    if (regex.test(input)) {
      const text = responses[intent] ?? RESPONSES.en[intent] ?? RESPONSES.en.default!;
      return { text, showWhatsAppCta: true, lang };
    }
  }

  const text = responses.default ?? RESPONSES.en.default!;
  return { text, showWhatsAppCta: true, lang };
}

// ---------------------- Suggestions ----------------------

const SUGGESTIONS: { label: string; intent: string }[] = [
  { label: "Book an appointment", intent: "book" },
  { label: "Treatment prices", intent: "price" },
  { label: "Where is the clinic?", intent: "location" },
  { label: "What services?", intent: "services" },
];

// ---------------------- Transcript ----------------------

const TRANSCRIPT_ENDPOINT = "https://formsubmit.co/ajax/dr.alaa.m.zidan@gmail.com";

async function postTranscript(messages: Message[]) {
  const userMsgs = messages.filter((m) => m.sender === "user");
  if (userMsgs.length === 0) return;
  const transcript = messages
    .map(
      (m) =>
        `${m.sender === "user" ? "Visitor" : "Layan"}: ${m.text.replace(/\s+/g, " ").trim()}`
    )
    .join("\n");
  const now = new Date();
  const timeLabel = now.toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
  try {
    await fetch(TRANSCRIPT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `🌸 Layan chat transcript — ${timeLabel}`,
        _template: "table",
        _captcha: "false",
        Time: timeLabel,
        Page: typeof window !== "undefined" ? window.location.href : "—",
        Messages: userMsgs.length,
        Transcript: transcript,
      }),
    });
  } catch {
    // Silent
  }
}

// ---------------------- Component ----------------------

export default function AiAgent() {
  const [open, setOpen] = useState(false);
  const [showPeek, setShowPeek] = useState(false);
  const [peekDismissed, setPeekDismissed] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Hello, lovely to meet you ✨ I'm Layan, an AI assistant for Dr. Alaa's clinic. Ask me anything quick — for booking and personalised advice, the team replies fastest on WhatsApp.",
      showWhatsAppCta: true,
    },
  ]);
  const [transcriptSent, setTranscriptSent] = useState(false);
  const messagesRef = useRef<Message[]>(messages);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  // Peek bubble after 4s
  useEffect(() => {
    if (open || peekDismissed) return;
    const t = setTimeout(() => setShowPeek(true), 4000);
    return () => clearTimeout(t);
  }, [open, peekDismissed]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  // Send transcript on tab close
  useEffect(() => {
    function onBeforeUnload() {
      const userMsgs = messagesRef.current.filter((m) => m.sender === "user");
      if (userMsgs.length === 0 || transcriptSent) return;
      const transcript = messagesRef.current
        .map(
          (m) =>
            `${m.sender === "user" ? "Visitor" : "Layan"}: ${m.text.replace(/\s+/g, " ").trim()}`
        )
        .join("\n");
      const body = JSON.stringify({
        _subject: `🌸 Layan chat transcript — ${new Date().toLocaleString()}`,
        _template: "table",
        _captcha: "false",
        Time: new Date().toLocaleString(),
        Page: window.location.href,
        Messages: userMsgs.length,
        Transcript: transcript,
      });
      const blob = new Blob([body], { type: "application/json" });
      navigator.sendBeacon?.(TRANSCRIPT_ENDPOINT, blob);
    }
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, [transcriptSent]);

  function sendMessage(text: string) {
    const userMsg: Message = { id: `u-${Date.now()}`, sender: "user", text };
    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      const reply = intentReplyMulti(text);
      const botMsg: Message = {
        id: `b-${Date.now()}`,
        sender: "bot",
        text: reply.text,
        showWhatsAppCta: reply.showWhatsAppCta,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    sendMessage(trimmed);
    setInput("");
  }

  function handleSuggestion(intent: string) {
    const map: Record<string, string> = {
      book: "How do I book an appointment?",
      price: "What are your prices?",
      location: "Where is the clinic?",
      services: "What services do you offer?",
    };
    sendMessage(map[intent] ?? intent);
  }

  function openChat() {
    setOpen(true);
    setShowPeek(false);
    setPeekDismissed(true);
  }

  async function closeChat() {
    setOpen(false);
    if (!transcriptSent) {
      const had = messages.some((m) => m.sender === "user");
      if (had) {
        setTranscriptSent(true);
        await postTranscript(messages);
      }
    }
  }

  // ---------- Reusable "L" avatar ----------
  const LAvatar = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
    const cls =
      size === "sm"
        ? "h-9 w-9 text-2xl"
        : size === "lg"
        ? "h-12 w-12 text-4xl"
        : "h-10 w-10 text-3xl";
    return (
      <span
        className={`relative inline-flex ${cls} items-center justify-center rounded-full bg-sand-50 text-gold-500 shadow-inner`}
        aria-hidden
      >
        <span className="font-script leading-none" style={{ paddingBottom: "0.18em" }}>
          L
        </span>
      </span>
    );
  };

  return (
    <>
      {/* Floating launcher — bottom-LEFT */}
      {!open && (
        <button
          type="button"
          onClick={openChat}
          aria-label="Open Layan, the clinic AI assistant"
          className="group fixed bottom-6 left-6 z-50 flex items-center gap-3 rounded-full bg-gradient-to-br from-rose-300 via-gold-400 to-gold-500 px-2 py-2 pr-4 text-sand-50 shadow-lg shadow-ink-900/30 transition hover:scale-[1.03] focus:outline-none focus-visible:ring-4 focus-visible:ring-gold-300"
        >
          <LAvatar size="md" />
          <span className="flex flex-col items-start leading-tight">
            <span className="text-xs font-semibold tracking-wide">Chat with Layan</span>
            <span className="text-[9px] uppercase tracking-[0.2em] opacity-90">
              AI clinic assistant
            </span>
          </span>
          {/* Online dot */}
          <span className="absolute bottom-1.5 left-[34px] h-3 w-3 rounded-full border-2 border-sand-50 bg-green-500" />
          {/* Quiet new-message badge — appears after a short delay */}
          {showPeek && (
            <span
              aria-label="New message"
              className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-sand-50 bg-rose-400 text-[10px] font-semibold leading-none text-sand-50 shadow"
            >
              1
            </span>
          )}
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Layan — Dr. Alaa's AI clinic assistant"
          className="fixed bottom-6 left-4 right-4 z-50 flex max-h-[80vh] flex-col overflow-hidden rounded-3xl border border-gold-300/50 bg-sand-50 shadow-2xl shadow-ink-900/30 sm:bottom-6 sm:left-6 sm:right-auto sm:w-[380px]"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-sand-200 bg-gradient-to-br from-sand-50 via-rose-50 to-sand-50 px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-rose-300 via-gold-400 to-gold-500 shadow">
                <LAvatar size="sm" />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-sand-50 bg-green-500" />
              </span>
              <div>
                <p className="font-serif text-base leading-tight text-ink-900">Layan</p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold-500">
                  AI clinic assistant · Online
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={closeChat}
              aria-label="Close assistant"
              className="rounded-full p-1.5 text-ink-700 transition hover:bg-sand-200 hover:text-ink-900"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto bg-sand-50 px-4 py-5">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${
                  m.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    m.sender === "user"
                      ? "rounded-br-md bg-ink-900 text-sand-50"
                      : "rounded-bl-md border border-sand-200 bg-white text-ink-800"
                  }`}
                  dir="auto"
                >
                  {m.text}
                </div>
                {m.sender === "bot" && m.showWhatsAppCta && (
                  <Link
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 rounded-full bg-gold-500 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-sand-50 shadow transition hover:bg-gold-600"
                  >
                    <svg
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      className="h-3.5 w-3.5"
                      aria-hidden
                    >
                      <path d="M16.225 4C9.484 4 4 9.484 4 16.225c0 2.293.645 4.43 1.748 6.293L4 28.78l6.408-1.633a12.16 12.16 0 0 0 5.817 1.475c6.74 0 12.225-5.484 12.225-12.225C28.45 9.484 22.965 4 16.225 4z" />
                    </svg>
                    Message on WhatsApp
                  </Link>
                )}
              </div>
            ))}
          </div>

          {messages.length <= 1 && (
            <div className="border-t border-sand-200 bg-sand-50 px-4 py-3">
              <p className="text-[10px] uppercase tracking-[0.25em] text-gold-500">
                Quick questions
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s.intent}
                    type="button"
                    onClick={() => handleSuggestion(s.intent)}
                    className="rounded-full border border-sand-200 bg-white px-3 py-1.5 text-xs text-ink-800 transition hover:border-gold-300 hover:text-gold-600"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-sand-200 bg-white px-3 py-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask Layan in any language…"
              aria-label="Type your message"
              className="flex-1 rounded-full border border-sand-200 bg-sand-50 px-4 py-2.5 text-sm text-ink-900 outline-none focus:border-gold-300"
              maxLength={500}
              dir="auto"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-300 to-gold-500 text-sand-50 transition hover:from-rose-400 hover:to-gold-600 disabled:cursor-not-allowed disabled:from-sand-300 disabled:to-sand-300"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden
              >
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          </form>

          <div className="border-t border-sand-200 bg-sand-50 px-4 py-2 text-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-ink-600">
              Layan · AI assistant · WhatsApp for personal help
            </p>
          </div>
        </div>
      )}

    </>
  );
}
