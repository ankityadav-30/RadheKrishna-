/* =========================================
   BHAGAVAD GITA SHLOKS — DATA + LOGIC
   18 Popular Shlokas × 12 Languages
   ========================================= */

const shlokaData = [
  {
    id: 1,
    chapter: 2,
    verse: 47,
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    topic: "Selfless Action",
    translations: {
      hi: "तुम्हारा अधिकार केवल कर्म करने में है, उसके फलों में कभी नहीं। तुम कर्मफल के हेतु मत बनो और न ही कर्म न करने में तुम्हारी आसक्ति हो।",
      en: "You have the right to perform your duty, but never to its fruits. Let not the fruits of action be your motive, nor let your attachment be to inaction.",
      ur: "تمہارا حق صرف عمل کرنے میں ہے، اس کے نتائج میں کبھی نہیں۔ عمل کے نتائج تمہاری تحریک نہ ہوں، اور نہ ہی بے عملی سے لگاؤ رکھو۔",
      ta: "உன் கடமையை செய்வதில் மட்டுமே உனக்கு உரிமை உள்ளது, அதன் பலனில் ஒருபோதும் இல்லை. செயலின் பலன் உன் நோக்கமாக இருக்க வேண்டாம்.",
      fr: "Tu as le droit d'accomplir ton devoir, mais jamais à ses fruits. Que les fruits de l'action ne soient pas ton motif, ni que ton attachement soit à l'inaction.",
      zh: "你有权履行你的职责，但永远无权享受其成果。不要让行动的果实成为你的动机，也不要执着于不行动。",
      es: "Tienes derecho a realizar tu deber, pero nunca a sus frutos. Que los frutos de la acción no sean tu motivo, ni te apegues a la inacción.",
      ar: "لديك الحق في أداء واجبك، ولكن ليس في ثماره أبداً. لا تجعل ثمار العمل دافعك، ولا تتعلق بعدم العمل.",
      ja: "あなたには義務を果たす権利があるが、その結果に対する権利は決してない。行動の果実を動機にしてはならず、無為への執着もしてはならない。",
      de: "Du hast das Recht, deine Pflicht zu erfüllen, aber niemals auf ihre Früchte. Lass die Früchte des Handelns nicht dein Motiv sein, noch hafte an der Untätigkeit.",
      ru: "Ты имеешь право выполнять свой долг, но никогда на его плоды. Пусть плоды действия не будут твоим мотивом, и не привязывайся к бездействию.",
      pt: "Você tem o direito de cumprir seu dever, mas nunca aos seus frutos. Que os frutos da ação não sejam seu motivo, nem se apegue à inação."
    }
  },
  {
    id: 2,
    chapter: 2,
    verse: 14,
    sanskrit: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः।\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत॥",
    topic: "Endurance",
    translations: {
      hi: "हे कुन्तीपुत्र! सुख-दुःख का अनुभव इन्द्रियों के विषय-संपर्क से होता है। ये आने-जाने वाले और अनित्य हैं। हे भारत! इन्हें सहन करो।",
      en: "O son of Kunti, the contact of the senses with their objects gives rise to feelings of cold and heat, pleasure and pain. They are transient; endure them bravely.",
      ur: "اے کنتی کے بیٹے! حواس کا اپنی چیزوں سے رابطہ سردی اور گرمی، خوشی اور درد کے احساسات پیدا کرتا ہے۔ یہ عارضی ہیں؛ انہیں بہادری سے برداشت کرو۔",
      ta: "குந்தியின் மகனே! புலன்கள் தொடர்புடைய பொருள்கள் குளிர், வெப்பம், இன்பம், துன்பம் ஆகிய உணர்வுகளை உண்டாக்குகின்றன. அவை நிலையற்றவை; அவற்றைத் தாங்குவாய்.",
      fr: "Ô fils de Kunti, le contact des sens avec leurs objets donne lieu à des sensations de froid et de chaleur, de plaisir et de douleur. Elles sont transitoires; endure-les bravement.",
      zh: "昆蒂之子啊！感官与其对象的接触产生冷热、苦乐的感觉。它们是短暂的；勇敢地忍受它们吧。",
      es: "Oh hijo de Kunti, el contacto de los sentidos con sus objetos da lugar a sentimientos de frío y calor, placer y dolor. Son transitorios; sopórtalos con valentía.",
      ar: "يا ابن كونتي، إن اتصال الحواس بأشيائها يولّد مشاعر البرد والحر، واللذة والألم. إنها زائلة؛ فتحملها بشجاعة.",
      ja: "クンティーの息子よ、感覚器官が対象と接触すると、寒暑・苦楽の感覚が生じる。それらは無常である。勇敢に耐えよ。",
      de: "O Sohn der Kunti, der Kontakt der Sinne mit ihren Objekten erzeugt Empfindungen von Kälte und Hitze, Freude und Schmerz. Sie sind vergänglich; ertrage sie tapfer.",
      ru: "О сын Кунти, контакт чувств с их объектами порождает ощущения холода и жара, удовольствия и боли. Они преходящи; мужественно переноси их.",
      pt: "Ó filho de Kunti, o contato dos sentidos com seus objetos dá origem a sensações de frio e calor, prazer e dor. São transitórios; suporte-os com bravura."
    }
  },
  {
    id: 3,
    chapter: 2,
    verse: 20,
    sanskrit: "न जायते म्रियते वा कदाचि-\nन्नायं भूत्वा भविता वा न भूयः।\nअजो नित्यः शाश्वतोऽयं पुराणो\nन हन्यते हन्यमाने शरीरे॥",
    topic: "Eternal Soul",
    translations: {
      hi: "आत्मा न कभी जन्मती है और न मरती है। यह न कभी अस्तित्व में आई और न कभी आएगी। यह अजन्मा, नित्य, शाश्वत और पुरातन है। शरीर के नष्ट होने पर भी यह नष्ट नहीं होती।",
      en: "The soul is never born, nor does it ever die. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain.",
      ur: "روح نہ کبھی پیدا ہوتی ہے اور نہ مرتی ہے۔ یہ نہ وجود میں آئی ہے، نہ آتی ہے، اور نہ آئے گی۔ یہ غیر پیدائشی، ابدی، ہمیشہ موجود اور قدیم ہے۔ جسم کے مرنے پر بھی یہ نہیں مرتی۔",
      ta: "ஆத்மா ஒருபோதும் பிறப்பதும் இல்லை, இறப்பதும் இல்லை. இது தோன்றியதுமில்லை, தோன்றுவதுமில்லை. பிறப்பற்றது, நித்தியமானது, என்றும் உள்ளது. உடல் அழிந்தாலும் இது அழிவதில்லை.",
      fr: "L'âme ne naît jamais ni ne meurt. Elle n'est jamais venue à l'existence, ne vient pas à l'existence et ne viendra jamais. Elle est non-née, éternelle, toujours existante et primordiale. Elle n'est pas tuée quand le corps est tué.",
      zh: "灵魂从未出生，也从未死亡。它不曾存在，不会存在，也将不会存在。它是未生的、永恒的、永存的、原始的。身体被杀时，它不会被杀。",
      es: "El alma nunca nace ni muere. No ha llegado a existir, no llega a existir y no llegará a existir. Es no nacida, eterna, siempre existente y primordial. No muere cuando el cuerpo muere.",
      ar: "الروح لا تولد أبداً ولا تموت. لم تكن في الوجود، ولا تكون، ولن تكون. إنها غير مولودة، أبدية، دائمة الوجود وأزلية. لا تُقتل عندما يُقتل الجسد.",
      ja: "魂は決して生まれず、死ぬこともない。存在に至ったことも、至ることも、至ることもない。不生、永遠、常在、太古である。肉体が滅びても魂は滅びない。",
      de: "Die Seele wird niemals geboren, noch stirbt sie jemals. Sie ist nie ins Dasein getreten, tritt nicht ins Dasein und wird nicht ins Dasein treten. Sie ist ungeboren, ewig, immerwährend und urzeitlich. Sie wird nicht getötet, wenn der Körper getötet wird.",
      ru: "Душа никогда не рождается и никогда не умирает. Она не возникала, не возникает и не возникнет. Она нерождённая, вечная, всегда существующая и изначальная. Она не гибнет, когда гибнет тело.",
      pt: "A alma nunca nasce nem morre. Não veio à existência, não vem à existência e não virá. É não-nascida, eterna, sempre existente e primordial. Não é morta quando o corpo é morto."
    }
  },
  {
    id: 4,
    chapter: 2,
    verse: 22,
    sanskrit: "वासांसि जीर्णानि यथा विहाय\nनवानि गृह्णाति नरोऽपराणि।\nतथा शरीराणि विहाय जीर्णा-\nन्यन्यानि संयाति नवानि देही॥",
    topic: "Changing Bodies",
    translations: {
      hi: "जैसे मनुष्य पुराने वस्त्र त्यागकर नए वस्त्र धारण करता है, वैसे ही आत्मा पुराने शरीर को त्यागकर नए शरीर को धारण करती है।",
      en: "As a person puts on new garments, giving up old ones, the soul similarly accepts new material bodies, giving up the old and useless ones.",
      ur: "جیسے انسان پرانے کپڑے اتار کر نئے پہنتا ہے، اسی طرح روح پرانے جسموں کو چھوڑ کر نئے جسم اختیار کرتی ہے۔",
      ta: "ஒரு மனிதன் பழைய ஆடைகளை நீக்கி புதிய ஆடைகளை அணிவது போல, ஆத்மா பழைய உடல்களை விட்டு புதிய உடல்களை ஏற்றுக்கொள்கிறது.",
      fr: "Comme une personne met de nouveaux vêtements en abandonnant les anciens, l'âme accepte de nouveaux corps matériels en abandonnant les anciens et usés.",
      zh: "正如人脱去旧衣穿上新衣，灵魂同样抛弃旧的物质身体，接受新的身体。",
      es: "Así como una persona se pone ropas nuevas dejando las viejas, el alma acepta nuevos cuerpos materiales dejando los viejos e inútiles.",
      ar: "كما يرتدي المرء ثياباً جديدة تاركاً القديمة، كذلك تقبل الروح أجساداً مادية جديدة تاركةً القديمة والبالية.",
      ja: "人が古い衣服を脱ぎ捨てて新しい衣服を着るように、魂も同様に古い肉体を捨てて新しい物質的な肉体を受け入れる。",
      de: "Wie ein Mensch neue Kleider anlegt und die alten ablegt, so nimmt die Seele neue materielle Körper an und gibt die alten und nutzlosen auf.",
      ru: "Как человек надевает новые одежды, сбрасывая старые, так и душа принимает новые материальные тела, оставляя старые и бесполезные.",
      pt: "Assim como uma pessoa veste novas roupas, abandonando as velhas, a alma aceita novos corpos materiais, abandonando os velhos e inúteis."
    }
  },
  {
    id: 5,
    chapter: 4,
    verse: 7,
    sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
    topic: "Divine Descent",
    translations: {
      hi: "हे भारत! जब-जब धर्म की हानि और अधर्म की वृद्धि होती है, तब-तब मैं स्वयं की रचना करता हूँ अर्थात् अवतार लेता हूँ।",
      en: "Whenever there is a decline in righteousness and an increase in unrighteousness, O Arjuna, at that time I manifest Myself on earth.",
      ur: "اے بھارت! جب جب نیکی میں کمی اور بدی میں اضافہ ہوتا ہے، تب تب میں خود کو ظاہر کرتا ہوں۔",
      ta: "பாரதா! எப்போதெல்லாம் அறம் குன்றி அதர்மம் வளர்கிறதோ, அப்போதெல்லாம் நான் என்னையே படைத்துக் கொள்கிறேன்.",
      fr: "Chaque fois qu'il y a un déclin de la vertu et une montée du vice, ô Arjuna, à ce moment-là Je Me manifeste sur terre.",
      zh: "每当正义衰落、不义增长时，阿朱那啊，那时我便降临人间。",
      es: "Siempre que hay una declinación de la rectitud y un aumento de la injusticia, oh Arjuna, en ese momento Me manifiesto en la tierra.",
      ar: "كلما حلّ انحطاط في الفضيلة وارتفاع في الرذيلة، يا أرجونا، في ذلك الوقت أتجلى على الأرض.",
      ja: "正義が衰え不義が増すとき、アルジュナよ、その時私は地上に顕現する。",
      de: "Wann immer die Rechtschaffenheit abnimmt und die Ungerechtigkeit zunimmt, o Arjuna, zu dieser Zeit manifestiere Ich Mich auf der Erde.",
      ru: "Всякий раз, когда наступает упадок праведности и рост неправедности, о Арджуна, в это время Я проявляю Себя на земле.",
      pt: "Sempre que há um declínio na retidão e um aumento na injustiça, ó Arjuna, nesse momento Eu Me manifesto na terra."
    }
  },
  {
    id: 6,
    chapter: 4,
    verse: 8,
    sanskrit: "परित्राणाय साधूनां विनाशाय च दुष्कृताम्।\nधर्मसंस्थापनार्थाय सम्भवामि युगे युगे॥",
    topic: "Protection of Good",
    translations: {
      hi: "सज्जनों की रक्षा, दुष्टों के विनाश और धर्म की स्थापना के लिए मैं युग-युग में प्रकट होता हूँ।",
      en: "To protect the righteous, to annihilate the wicked, and to re-establish the principles of dharma, I appear millennium after millennium.",
      ur: "نیک لوگوں کی حفاظت، برے لوگوں کی تباہی اور دھرم کی بحالی کے لیے میں ہر دور میں ظاہر ہوتا ہوں۔",
      ta: "நல்லவர்களைக் காக்கவும், தீயவர்களை அழிக்கவும், அறத்தை நிலைநாட்டவும் நான் யுகம் யுகமாக அவதரிக்கிறேன்.",
      fr: "Pour protéger les vertueux, anéantir les méchants et rétablir les principes du dharma, J'apparais d'âge en âge.",
      zh: "为了保护善良的人，消灭邪恶的人，重新建立正法的原则，我一个时代接一个时代地降临。",
      es: "Para proteger a los justos, aniquilar a los malvados y restablecer los principios del dharma, aparezco milenio tras milenio.",
      ar: "لحماية الصالحين وإبادة الأشرار وإعادة إرساء مبادئ الدهارما، أظهر في كل عصر.",
      ja: "善人を守り、悪人を滅ぼし、ダルマの原則を再確立するために、私は時代ごとに現れる。",
      de: "Um die Rechtschaffenen zu schützen, die Bösen zu vernichten und die Prinzipien des Dharma wiederherzustellen, erscheine Ich Zeitalter für Zeitalter.",
      ru: "Чтобы защитить праведных, уничтожить нечестивых и восстановить принципы дхармы, Я появляюсь из века в век.",
      pt: "Para proteger os justos, aniquilar os perversos e restabelecer os princípios do dharma, Eu apareço de milênio em milênio."
    }
  },
  {
    id: 7,
    chapter: 9,
    verse: 22,
    sanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥",
    topic: "Divine Care",
    translations: {
      hi: "जो लोग अनन्य भाव से मुझे चिन्तन करते हुए मेरी उपासना करते हैं, उन नित्य मेरे साथ जुड़े हुए भक्तों का योगक्षेम मैं स्वयं वहन करता हूँ।",
      en: "For those who always think of Me and worship Me with exclusive devotion, I carry what they lack and preserve what they have.",
      ur: "جو لوگ ہمیشہ میرے بارے میں سوچتے اور خالص عقیدت سے میری عبادت کرتے ہیں، جو ان کے پاس نہیں ہے وہ میں لاتا ہوں اور جو ہے اسے محفوظ رکھتا ہوں۔",
      ta: "எப்போதும் என்னையே நினைத்து, தனிப்பட்ட பக்தியோடு வழிபடுவோருக்கு, அவர்களுக்கு இல்லாததை நான் அளிக்கிறேன், உள்ளதைக் காக்கிறேன்.",
      fr: "Pour ceux qui pensent toujours à Moi et Me vénèrent avec une dévotion exclusive, Je porte ce qui leur manque et préserve ce qu'ils ont.",
      zh: "对于那些总是想着我、以专一的虔诚崇拜我的人，我会带给他们所缺乏的，保护他们所拥有的。",
      es: "Para aquellos que siempre piensan en Mí y Me adoran con devoción exclusiva, Yo llevo lo que les falta y preservo lo que tienen.",
      ar: "لأولئك الذين يفكرون فيّ دائماً ويعبدونني بإخلاص حصري، أحمل ما ينقصهم وأحفظ ما لديهم.",
      ja: "常に私を想い、専一の献身で私を崇拝する者に、私は彼らに欠けているものをもたらし、持っているものを守る。",
      de: "Für diejenigen, die immer an Mich denken und Mich mit ausschließlicher Hingabe verehren, trage Ich, was ihnen fehlt, und bewahre, was sie haben.",
      ru: "Для тех, кто всегда думает обо Мне и поклоняется Мне с исключительной преданностью, Я несу то, чего им не хватает, и сохраняю то, что у них есть.",
      pt: "Para aqueles que sempre pensam em Mim e Me adoram com devoção exclusiva, Eu carrego o que lhes falta e preservo o que têm."
    }
  },
  {
    id: 8,
    chapter: 11,
    verse: 32,
    sanskrit: "कालोऽस्मि लोकक्षयकृत्प्रवृद्धो\nलोकान्समाहर्तुमिह प्रवृत्तः।",
    topic: "Time — The Destroyer",
    translations: {
      hi: "मैं लोकों का नाश करने वाला बढ़ा हुआ महाकाल हूँ। इस समय इन लोकों को नष्ट करने के लिए प्रवृत्त हुआ हूँ।",
      en: "I am Time, the great destroyer of the worlds, and I have come here to destroy all people.",
      ur: "میں وقت ہوں، دنیاؤں کا عظیم تباہ کنندہ، اور میں یہاں سب لوگوں کو تباہ کرنے آیا ہوں۔",
      ta: "நான் காலம், உலகங்களின் பெரும் அழிப்பவன், எல்லா மக்களையும் அழிக்க இங்கு வந்துள்ளேன்.",
      fr: "Je suis le Temps, le grand destructeur des mondes, et Je suis venu ici pour détruire tous les peuples.",
      zh: "我是时间，世界的伟大毁灭者，我来到这里是为了毁灭所有的人。",
      es: "Yo soy el Tiempo, el gran destructor de los mundos, y he venido aquí para destruir a todas las personas.",
      ar: "أنا الزمن، المدمر العظيم للعوالم، وقد جئت هنا لأدمر جميع الناس.",
      ja: "私は時間であり、世界の偉大なる破壊者である。すべての人々を滅ぼすためにここに来た。",
      de: "Ich bin die Zeit, die große Zerstörerin der Welten, und Ich bin hierher gekommen, um alle Menschen zu vernichten.",
      ru: "Я — Время, великий разрушитель миров, и Я пришёл сюда, чтобы уничтожить всех людей.",
      pt: "Eu sou o Tempo, o grande destruidor dos mundos, e vim aqui para destruir todas as pessoas."
    }
  },
  {
    id: 9,
    chapter: 6,
    verse: 5,
    sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
    topic: "Self-Upliftment",
    translations: {
      hi: "अपने आप को अपने द्वारा ऊपर उठाओ, अपने आप को नीचे मत गिरने दो। क्योंकि आत्मा ही आत्मा का मित्र है और आत्मा ही आत्मा का शत्रु है।",
      en: "Elevate yourself through the power of your mind, and not degrade yourself. The mind is the friend of the conditioned soul, and his enemy as well.",
      ur: "اپنے آپ کو اپنے ذریعے بلند کرو، اپنے آپ کو گرنے نہ دو۔ کیونکہ آپ خود اپنے دوست ہیں اور آپ خود اپنے دشمن بھی ہیں۔",
      ta: "உன்னை உன்னாலே உயர்த்திக்கொள், தாழ்த்திக் கொள்ளாதே. ஆன்மா தனக்கே நண்பன், ஆன்மா தனக்கே எதிரி.",
      fr: "Élève-toi par le pouvoir de ton esprit et ne te dégrade pas. L'esprit est l'ami de l'âme conditionnée, et aussi son ennemi.",
      zh: "通过心灵的力量提升自己，不要贬低自己。心灵既是有条件灵魂的朋友，也是他的敌人。",
      es: "Elévate a ti mismo por el poder de tu mente, y no te degrades. La mente es amiga del alma condicionada, y también su enemiga.",
      ar: "ارتقِ بنفسك بقوة عقلك، ولا تحطّ من نفسك. العقل هو صديق الروح المقيدة وعدوها أيضاً.",
      ja: "心の力で自分を高めよ、自分を貶めるな。心は条件づけられた魂の友であり、また敵でもある。",
      de: "Erhebe dich durch die Kraft deines Geistes und erniedrige dich nicht. Der Geist ist der Freund der bedingten Seele und auch ihr Feind.",
      ru: "Возвысь себя силой своего разума и не унижай себя. Ум — друг обусловленной души, и также её враг.",
      pt: "Eleve-se pelo poder de sua mente e não se degrade. A mente é amiga da alma condicionada, e também sua inimiga."
    }
  },
  {
    id: 10,
    chapter: 2,
    verse: 62,
    sanskrit: "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते।\nसङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते॥",
    topic: "Chain of Downfall",
    translations: {
      hi: "विषयों का चिंतन करने वाले पुरुष की उनमें आसक्ति हो जाती है। आसक्ति से काम उत्पन्न होता है और काम से क्रोध उत्पन्न होता है।",
      en: "While contemplating the objects of the senses, a person develops attachment for them. From attachment arises desire, and from unfulfilled desire, anger arises.",
      ur: "حواس کی چیزوں پر غور کرتے ہوئے، انسان ان سے لگاؤ پیدا کرتا ہے۔ لگاؤ سے خواہش پیدا ہوتی ہے، اور نامکمل خواہش سے غصہ پیدا ہوتا ہے۔",
      ta: "புலன் பொருள்களை சிந்திக்கும்போது, அவற்றின் மீது பற்று உண்டாகிறது. பற்றிலிருந்து ஆசை உண்டாகிறது, நிறைவேறாத ஆசையிலிருந்து கோபம் உண்டாகிறது.",
      fr: "En contemplant les objets des sens, une personne développe un attachement pour eux. De l'attachement naît le désir, et du désir non satisfait naît la colère.",
      zh: "当一个人沉思感官的对象时，他就会对它们产生执着。从执着中产生欲望，从未满足的欲望中产生愤怒。",
      es: "Al contemplar los objetos de los sentidos, una persona desarrolla apego por ellos. Del apego surge el deseo, y del deseo insatisfecho surge la ira.",
      ar: "عند التأمل في أشياء الحواس، يطوّر المرء تعلقاً بها. من التعلق ينشأ الرغبة، ومن الرغبة غير المحققة ينشأ الغضب.",
      ja: "感覚の対象を熟考すると、人はそれらへの執着を抱く。執着から欲望が生まれ、満たされない欲望から怒りが生まれる。",
      de: "Wenn man über die Objekte der Sinne nachdenkt, entwickelt man Anhaftung an sie. Aus der Anhaftung entsteht Verlangen, und aus unerfülltem Verlangen entsteht Zorn.",
      ru: "Размышляя об объектах чувств, человек развивает привязанность к ним. Из привязанности возникает желание, а из неудовлетворённого желания — гнев.",
      pt: "Ao contemplar os objetos dos sentidos, uma pessoa desenvolve apego por eles. Do apego surge o desejo, e do desejo insatisfeito surge a raiva."
    }
  },
  {
    id: 11,
    chapter: 3,
    verse: 21,
    sanskrit: "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः।\nस यत्प्रमाणं कुरुते लोकस्तदनुवर्तते॥",
    topic: "Leading by Example",
    translations: {
      hi: "श्रेष्ठ पुरुष जो-जो आचरण करता है, अन्य लोग भी वैसा ही आचरण करते हैं। वह जो प्रमाण स्थापित करता है, समस्त संसार उसका अनुसरण करता है।",
      en: "Whatever action a great person performs, common people follow. Whatever standards they set by their exemplary acts, the whole world follows.",
      ur: "ایک عظیم شخص جو بھی عمل کرتا ہے، عام لوگ اس کی پیروی کرتے ہیں۔ وہ جو معیار اپنے مثالی اعمال سے قائم کرتا ہے، پوری دنیا اس کی پیروی کرتی ہے۔",
      ta: "ஒரு பெரிய மனிதன் எந்த செயலை செய்கிறானோ, சாதாரண மக்களும் அதையே பின்பற்றுகிறார்கள். அவன் தன் முன்மாதிரியான செயல்களால் எந்த தரத்தை நிர்ணயிக்கிறானோ, உலகமே அதை பின்பற்றுகிறது.",
      fr: "Quelle que soit l'action qu'un grand homme accomplit, les gens ordinaires suivent. Quels que soient les standards qu'il établit par ses actes exemplaires, le monde entier suit.",
      zh: "伟大的人做什么样的行为，普通人就会效仿。他们通过自己的模范行为设定的标准，整个世界都会遵循。",
      es: "Cualquier acción que realice una gran persona, la gente común la sigue. Cualquier estándar que establezcan con sus actos ejemplares, todo el mundo lo sigue.",
      ar: "أي عمل يقوم به شخص عظيم، يتبعه الناس العاديون. أي معايير يضعها بأفعاله المثالية، يتبعها العالم بأسره.",
      ja: "偉大な人が行う行動は何であれ、一般の人々はそれに従う。模範的な行為で定める基準に、全世界が従う。",
      de: "Welche Handlung auch immer ein großer Mensch ausführt, gewöhnliche Menschen folgen ihr. Welche Maßstäbe er durch seine beispielhaften Taten setzt, die ganze Welt folgt ihnen.",
      ru: "Какое бы действие ни совершал великий человек, обычные люди следуют ему. Какие бы стандарты он ни устанавливал своими примерными поступками, весь мир следует им.",
      pt: "Qualquer ação que uma grande pessoa realiza, as pessoas comuns seguem. Quaisquer padrões que estabeleçam por seus atos exemplares, o mundo inteiro segue."
    }
  },
  {
    id: 12,
    chapter: 18,
    verse: 66,
    sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
    topic: "Ultimate Surrender",
    translations: {
      hi: "सब धर्मों को त्यागकर केवल मेरी शरण में आ जाओ। मैं तुम्हें सब पापों से मुक्त कर दूँगा। शोक मत करो।",
      en: "Abandon all varieties of dharma and simply surrender unto Me alone. I shall liberate you from all sinful reactions; do not grieve.",
      ur: "تمام قسم کے دھرم چھوڑ کر صرف میری پناہ میں آ جاؤ۔ میں تمہیں تمام گناہوں سے آزاد کر دوں گا؛ غم نہ کرو۔",
      ta: "எல்லா வகையான தர்மங்களையும் விட்டுவிட்டு, என்னிடம் மட்டுமே சரண் அடை. நான் உன்னை எல்லா பாவங்களிலிருந்தும் விடுவிப்பேன்; கவலைப்படாதே.",
      fr: "Abandonne toutes les variétés de dharma et rends-toi simplement à Moi seul. Je te libérerai de toutes les réactions pécheresses ; ne t'afflige pas.",
      zh: "放弃所有种类的法，仅仅归依于我。我将把你从所有罪恶的反应中解脱出来；不要悲伤。",
      es: "Abandona todas las variedades de dharma y simplemente ríndete a Mí solo. Te liberaré de todas las reacciones pecaminosas; no te aflijas.",
      ar: "اترك جميع أنواع الدهارما واستسلم لي وحدي ببساطة. سأحررك من جميع ردود الفعل الآثمة؛ لا تحزن.",
      ja: "あらゆる種類のダルマを捨て、ただ私にのみ帰依せよ。私はすべての罪の反応からあなたを解放する。嘆くな。",
      de: "Gib alle Arten von Dharma auf und ergib dich einfach Mir allein. Ich werde dich von allen sündhaften Reaktionen befreien; trauere nicht.",
      ru: "Оставь все виды дхармы и просто предайся Мне одному. Я освобожу тебя от всех греховных реакций; не скорби.",
      pt: "Abandone todas as variedades de dharma e simplesmente renda-se a Mim somente. Eu o libertarei de todas as reações pecaminosas; não se aflija."
    }
  },
  {
    id: 13,
    chapter: 2,
    verse: 27,
    sanskrit: "जातस्य हि ध्रुवो मृत्युर्ध्रुवं जन्म मृतस्य च।\nतस्मादपरिहार्येऽर्थे न त्वं शोचितुमर्हसि॥",
    topic: "Certainty of Death",
    translations: {
      hi: "जन्मे हुए की मृत्यु निश्चित है और मरे हुए का जन्म निश्चित है। इसलिए जो अपरिहार्य है उसके लिए तुम्हें शोक नहीं करना चाहिए।",
      en: "For one who has taken birth, death is certain; and for one who has died, birth is certain. Therefore, you should not grieve for what is inevitable.",
      ur: "جو پیدا ہوا ہے اس کی موت یقینی ہے؛ اور جو مر گیا ہے اس کی پیدائش یقینی ہے۔ اس لیے جو ناگزیر ہے اس پر غم نہ کرو۔",
      ta: "பிறந்தவனுக்கு மரணம் நிச்சயம்; இறந்தவனுக்குப் பிறப்பும் நிச்சயம். எனவே தவிர்க்க முடியாததற்கு வருந்தாதே.",
      fr: "Pour celui qui est né, la mort est certaine; et pour celui qui est mort, la naissance est certaine. Donc, tu ne devrais pas te lamenter pour ce qui est inévitable.",
      zh: "对于出生的人，死亡是确定的；对于死去的人，出生是确定的。因此，你不应为不可避免的事情悲伤。",
      es: "Para quien ha nacido, la muerte es segura; y para quien ha muerto, el nacimiento es seguro. Por lo tanto, no debes afligirte por lo que es inevitable.",
      ar: "من وُلد فموته محتوم؛ ومن مات فولادته محتومة. لذلك لا ينبغي أن تحزن على ما لا مفر منه.",
      ja: "生まれた者には死が確実であり、死んだ者には生が確実である。したがって、避けられないことに嘆くべきではない。",
      de: "Für den, der geboren wurde, ist der Tod gewiss; und für den, der gestorben ist, ist die Geburt gewiss. Daher solltest du nicht über das Unvermeidliche trauern.",
      ru: "Для того, кто родился, смерть неизбежна; и для того, кто умер, рождение неизбежно. Поэтому ты не должен скорбеть о том, что неизбежно.",
      pt: "Para quem nasceu, a morte é certa; e para quem morreu, o nascimento é certo. Portanto, não deves afligir-te pelo que é inevitável."
    }
  },
  {
    id: 14,
    chapter: 9,
    verse: 26,
    sanskrit: "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति।\nतदहं भक्त्युपहृतमश्नामि प्रयतात्मनः॥",
    topic: "Simple Devotion",
    translations: {
      hi: "जो कोई भक्ति से मुझे पत्र, पुष्प, फल या जल अर्पित करता है, मैं उस शुद्ध हृदय वाले भक्त का प्रेमपूर्वक अर्पित किया हुआ उपहार स्वीकार करता हूँ।",
      en: "If one offers Me with love and devotion a leaf, a flower, a fruit, or water, I will accept it from that pure-hearted person.",
      ur: "اگر کوئی محبت اور عقیدت سے مجھے ایک پتا، پھول، پھل یا پانی پیش کرے، میں اسے اس پاک دل شخص سے قبول کرتا ہوں۔",
      ta: "யாரேனும் அன்போடும் பக்தியோடும் ஒரு இலையை, மலரை, பழத்தை அல்லது நீரைப் படைத்தால், அந்தத் தூய உள்ளம் கொண்டவரிடமிருந்து நான் அதை ஏற்றுக்கொள்கிறேன்.",
      fr: "Si quelqu'un M'offre avec amour et dévotion une feuille, une fleur, un fruit ou de l'eau, Je l'accepterai de cette personne au cœur pur.",
      zh: "如果有人怀着爱和虔诚向我奉献一片叶子、一朵花、一个水果或一杯水，我会从那个纯洁的人那里接受它。",
      es: "Si alguien Me ofrece con amor y devoción una hoja, una flor, una fruta o agua, lo aceptaré de esa persona de corazón puro.",
      ar: "إذا قدم لي أحد بحب وإخلاص ورقة أو زهرة أو فاكهة أو ماء، فسأقبلها من ذلك الشخص الطاهر القلب.",
      ja: "もし誰かが愛と献身をもって一枚の葉、一輪の花、一つの果実、あるいは水を私に捧げるなら、私はその純粋な心の人からそれを受け取る。",
      de: "Wenn jemand Mir mit Liebe und Hingabe ein Blatt, eine Blume, eine Frucht oder Wasser darbringt, werde Ich es von dieser reinherzigen Person annehmen.",
      ru: "Если кто-то с любовью и преданностью предложит Мне лист, цветок, плод или воду, Я приму это от этого чистого сердцем человека.",
      pt: "Se alguém Me oferecer com amor e devoção uma folha, uma flor, uma fruta ou água, Eu aceitarei dela dessa pessoa de coração puro."
    }
  },
  {
    id: 15,
    chapter: 7,
    verse: 7,
    sanskrit: "मत्तः परतरं नान्यत्किञ्चिदस्ति धनञ्जय।\nमयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव॥",
    topic: "Supreme Truth",
    translations: {
      hi: "हे धनंजय! मुझसे परे और कुछ भी नहीं है। यह सब कुछ मुझमें ऐसे पिरोया हुआ है जैसे सूत्र में मणियाँ।",
      en: "There is nothing whatsoever higher than Me, O Arjuna. Everything rests upon Me, as pearls are strung on a thread.",
      ur: "اے دھنن جے! مجھ سے بالاتر کچھ بھی نہیں ہے۔ سب کچھ مجھ پر ایسے ٹکا ہوا ہے جیسے دھاگے میں موتی پروئے ہوں۔",
      ta: "தனஞ்சயா! என்னை விட உயர்ந்தது எதுவும் இல்லை. நூலில் முத்துக்கள் போல, எல்லாம் என்னிடம் கோர்க்கப்பட்டுள்ளன.",
      fr: "Il n'y a rien de plus élevé que Moi, ô Arjuna. Tout repose sur Moi, comme des perles sont enfilées sur un fil.",
      zh: "阿朱那啊！没有什么比我更高的了。一切都依托于我，如同珍珠串在线上。",
      es: "No hay nada superior a Mí, oh Arjuna. Todo descansa sobre Mí, como perlas ensartadas en un hilo.",
      ar: "لا يوجد شيء أعلى مني، يا أرجونا. كل شيء يستند إليّ، كاللآلئ المنظومة في خيط.",
      ja: "アルジュナよ、私より高いものは何もない。すべては糸に真珠が連なるように、私に依存している。",
      de: "Es gibt nichts, was höher ist als Ich, o Arjuna. Alles ruht auf Mir, wie Perlen auf einen Faden aufgereiht sind.",
      ru: "Нет ничего выше Меня, о Арджуна. Всё покоится на Мне, как жемчужины нанизаны на нить.",
      pt: "Não há nada superior a Mim, ó Arjuna. Tudo repousa sobre Mim, como pérolas enfiadas em um fio."
    }
  },
  {
    id: 16,
    chapter: 2,
    verse: 3,
    sanskrit: "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते।\nक्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप॥",
    topic: "Courage",
    translations: {
      hi: "हे पार्थ! नपुंसकता को मत प्राप्त हो, यह तुम्हें शोभा नहीं देती। हे परंतप! हृदय की इस तुच्छ दुर्बलता को त्यागकर खड़े हो जाओ।",
      en: "Do not yield to this degrading weakness, O Partha. It does not befit you. Give up such petty faint-heartedness and arise, O scorcher of enemies!",
      ur: "اے پارتھ! اس ذلیل کمزوری کے آگے نہ جھکو، یہ تمہارے شایان شان نہیں۔ اس حقیر بزدلی کو چھوڑو اور اٹھ کھڑے ہو، اے دشمنوں کو جلانے والے!",
      ta: "பார்த்தா! இந்த இழிவான பலவீனத்திற்கு இணங்காதே, இது உனக்கு தகாது. இந்த அற்பமான கோழைத்தனத்தை விட்டு எழுந்திரு, எதிரிகளை எரிப்பவனே!",
      fr: "Ne cède pas à cette faiblesse dégradante, ô Partha. Elle ne te sied pas. Abandonne cette pusillanimité mesquine et lève-toi, ô pourfendeur d'ennemis !",
      zh: "帕尔塔啊！不要屈服于这种卑微的软弱，这不配你。放弃这种渺小的怯懦，站起来吧，消灭敌人的勇士！",
      es: "No cedas a esta debilidad degradante, oh Partha. No te conviene. Abandona esta pusilanimidad mezquina y levántate, ¡oh abrasador de enemigos!",
      ar: "لا تستسلم لهذا الضعف المهين يا بارثا. إنه لا يليق بك. تخلّ عن هذا الجبن الحقير وانهض، يا محارب الأعداء!",
      ja: "パールタよ、この卑しい弱さに屈するな。それはあなたにふさわしくない。このつまらない臆病さを捨てて立ち上がれ、敵を焼き尽くす者よ！",
      de: "Gib dieser erniedrigenden Schwäche nicht nach, o Partha. Sie ist deiner nicht würdig. Gib diese kleinliche Feigheit auf und erhebe dich, o Feindvernichter!",
      ru: "Не поддавайся этой унизительной слабости, о Партха. Она тебе не подобает. Оставь это мелкое малодушие и встань, о сокрушитель врагов!",
      pt: "Não ceda a esta fraqueza degradante, ó Partha. Não te convém. Abandone esta pusilanimidade mesquinha e levante-se, ó incinerador de inimigos!"
    }
  },
  {
    id: 17,
    chapter: 6,
    verse: 35,
    sanskrit: "असंशयं महाबाहो मनो दुर्निग्रहं चलम्।\nअभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते॥",
    topic: "Mind Control",
    translations: {
      hi: "हे महाबाहो! निःसंदेह मन चंचल और कठिन है वश में करने के लिए। परन्तु हे कौन्तेय! अभ्यास और वैराग्य द्वारा इसे वश में किया जा सकता है।",
      en: "O mighty-armed one, undoubtedly the mind is restless and difficult to control. But it can be controlled, O son of Kunti, by constant practice and detachment.",
      ur: "اے طاقتور بازو والے! بلا شبہ ذہن بے چین ہے اور قابو کرنا مشکل ہے۔ لیکن اے کنتی کے بیٹے! مسلسل مشق اور بے لگاؤ سے اسے قابو کیا جا سکتا ہے۔",
      ta: "வலிய தோளுடையவனே! ஐயமின்றி மனம் அமைதியற்றது, கட்டுப்படுத்த கடினமானது. ஆனால் குந்தியின் மகனே, தொடர் பயிற்சி மற்றும் பற்றின்மையால் அதைக் கட்டுப்படுத்த முடியும்.",
      fr: "Ô puissant guerrier, sans aucun doute l'esprit est agité et difficile à contrôler. Mais il peut être maîtrisé, ô fils de Kunti, par la pratique constante et le détachement.",
      zh: "强臂者啊！毫无疑问，心是躁动不安且难以控制的。但是，昆蒂之子啊，通过不断的修行和超脱可以控制它。",
      es: "Oh poderoso guerrero, sin duda la mente es inquieta y difícil de controlar. Pero puede ser controlada, oh hijo de Kunti, por la práctica constante y el desapego.",
      ar: "أيها القوي الذراعين، لا شك أن العقل مضطرب وصعب السيطرة عليه. لكن يمكن السيطرة عليه، يا ابن كونتي، بالممارسة المستمرة والتجرد.",
      ja: "力強き腕の者よ、確かに心は落ち着きがなく制御が難しい。しかしクンティーの息子よ、絶え間ない修練と離欲によって制御できる。",
      de: "O Mächtiger, zweifellos ist der Geist ruhelos und schwer zu kontrollieren. Aber er kann beherrscht werden, o Sohn der Kunti, durch ständige Übung und Loslösung.",
      ru: "О могучерукий, без сомнения, ум беспокоен и труден для управления. Но его можно обуздать, о сын Кунти, постоянной практикой и отрешённостью.",
      pt: "Ó poderoso guerreiro, sem dúvida a mente é inquieta e difícil de controlar. Mas pode ser controlada, ó filho de Kunti, pela prática constante e pelo desapego."
    }
  },
  {
    id: 18,
    chapter: 15,
    verse: 15,
    sanskrit: "सर्वस्य चाहं हृदि सन्निविष्टो\nमत्तः स्मृतिर्ज्ञानमपोहनं च।",
    topic: "God in Every Heart",
    translations: {
      hi: "मैं सबके हृदय में स्थित हूँ। मुझसे ही स्मृति, ज्ञान और उनका अपोहन (विस्मरण) होता है।",
      en: "I am seated in everyone's heart, and from Me come remembrance, knowledge, and forgetfulness.",
      ur: "میں سب کے دل میں بیٹھا ہوں، اور مجھ سے ہی یاد، علم اور بھلنا آتا ہے۔",
      ta: "நான் அனைவரின் இதயத்திலும் அமர்ந்துள்ளேன், என்னிடமிருந்தே நினைவு, அறிவு மற்றும் மறதி வருகின்றன.",
      fr: "Je suis assis dans le cœur de chacun, et de Moi viennent le souvenir, la connaissance et l'oubli.",
      zh: "我坐在每个人的心中，记忆、知识和遗忘都来自于我。",
      es: "Estoy sentado en el corazón de todos, y de Mí vienen el recuerdo, el conocimiento y el olvido.",
      ar: "أنا جالس في قلب الجميع، ومني تأتي الذاكرة والمعرفة والنسيان.",
      ja: "私はすべての人の心に座しており、私から記憶、知識、そして忘却が生まれる。",
      de: "Ich sitze im Herzen eines jeden, und von Mir kommen Erinnerung, Wissen und Vergessen.",
      ru: "Я пребываю в сердце каждого, и от Меня исходят память, знание и забвение.",
      pt: "Estou sentado no coração de todos, e de Mim vêm a lembrança, o conhecimento e o esquecimento."
    }
  }
];

/* =========================================
   LANGUAGE CONFIG
   ========================================= */
const languageNames = {
  hi: "हिन्दी",
  en: "English",
  ur: "اردو",
  ta: "தமிழ்",
  fr: "Français",
  zh: "中文",
  es: "Español",
  ar: "العربية",
  ja: "日本語",
  de: "Deutsch",
  ru: "Русский",
  pt: "Português"
};

/* =========================================
   PAGE LOGIC
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {

  const cardGrid = document.getElementById('shlokaGrid');
  const searchInput = document.getElementById('searchInput');
  const globalLangSelect = document.getElementById('globalLang');
  let currentGlobalLang = 'en';

  // Render all cards
  function renderCards(filter = '') {
    if (!cardGrid) return;
    cardGrid.innerHTML = '';

    const filtered = shlokaData.filter(s => {
      if (!filter) return true;
      const q = filter.toLowerCase();
      return (
        s.sanskrit.toLowerCase().includes(q) ||
        s.topic.toLowerCase().includes(q) ||
        s.translations.hi.toLowerCase().includes(q) ||
        s.translations.en.toLowerCase().includes(q) ||
        `chapter ${s.chapter}`.includes(q) ||
        `verse ${s.verse}`.includes(q) ||
        `${s.chapter}.${s.verse}`.includes(q)
      );
    });

    if (filtered.length === 0) {
      cardGrid.innerHTML = `
        <div class="no-results">
          <span class="no-results-icon">🙏</span>
          <p>No shlokas found for "<strong>${filter}</strong>"</p>
          <p class="no-results-hint">Try searching by chapter number, topic, or keyword</p>
        </div>
      `;
      return;
    }

    filtered.forEach((shloka, index) => {
      const card = createShlokaCard(shloka, index);
      cardGrid.appendChild(card);
    });

    // Re-observe for scroll animations
    observeCards();
  }

  function createShlokaCard(shloka, index) {
    const card = document.createElement('article');
    card.className = 'shloka-card animate-on-scroll';
    card.dataset.animation = 'fadeUp';
    card.dataset.delay = (index % 3) * 150;

    // Build language options
    let langOptions = '';
    Object.entries(languageNames).forEach(([code, name]) => {
      const selected = code === currentGlobalLang ? 'selected' : '';
      langOptions += `<option value="${code}" ${selected}>${name}</option>`;
    });

    card.innerHTML = `
      <div class="shloka-card-shine"></div>
      <div class="shloka-header">
        <span class="chapter-badge">Ch. ${shloka.chapter}</span>
        <span class="verse-badge">Verse ${shloka.verse}</span>
        <span class="topic-badge">${shloka.topic}</span>
      </div>
      <div class="shloka-sanskrit">
        ${shloka.sanskrit.replace(/\n/g, '<br>')}
      </div>
      <div class="shloka-hindi">
        <div class="meaning-label"><span class="label-icon">🙏</span> हिन्दी अर्थ</div>
        <p>${shloka.translations.hi}</p>
      </div>
      <div class="shloka-translation">
        <div class="translation-header">
          <div class="meaning-label"><span class="label-icon">🌍</span> Translation</div>
          <select class="lang-select" data-shloka-id="${shloka.id}">
            ${langOptions}
          </select>
        </div>
        <p class="translation-text" id="trans-${shloka.id}">${shloka.translations[currentGlobalLang]}</p>
      </div>
    `;

    // Individual language selector
    const select = card.querySelector('.lang-select');
    select.addEventListener('change', (e) => {
      const lang = e.target.value;
      const transEl = card.querySelector('.translation-text');
      transEl.style.opacity = '0';
      transEl.style.transform = 'translateY(10px)';
      setTimeout(() => {
        transEl.textContent = shloka.translations[lang];
        transEl.style.opacity = '1';
        transEl.style.transform = 'translateY(0)';
      }, 200);
    });

    return card;
  }

  // Global language change
  if (globalLangSelect) {
    globalLangSelect.addEventListener('change', (e) => {
      currentGlobalLang = e.target.value;
      renderCards(searchInput ? searchInput.value : '');
    });
  }

  // Search
  let searchTimeout;
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        renderCards(e.target.value.trim());
      }, 300);
    });
  }

  // Scroll animation observer
  function observeCards() {
    const elements = document.querySelectorAll('.animate-on-scroll:not(.is-visible)');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.classList.add('is-visible');
          }, parseInt(delay));
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
  }

  // Stats counter
  function updateStats() {
    const countEl = document.getElementById('shlokaCount');
    const langCountEl = document.getElementById('langCount');
    if (countEl) countEl.textContent = shlokaData.length;
    if (langCountEl) langCountEl.textContent = Object.keys(languageNames).length;
  }

  // Initialize
  renderCards();
  updateStats();
  observeCards();

  // Navbar scroll effect
  const navbar = document.getElementById('mainNav');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // Scroll to top
  const scrollBtn = document.getElementById('scrollToTop');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    }, { passive: true });
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
