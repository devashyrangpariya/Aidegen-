export default [
  {
    name: "Blog Title",
    desc: "An AI tool that generate blog title depends on yout blog information",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt:
      "Give me 5 blog topic idea in bullet wise only based on give niche & outline and give me result in Rich text editor format",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Content",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
    slug: "blog-content-generation",
    aiPrompt:
      "Generate Blog Content based on topic and outline in rich text editor format",
    form: [
      {
        label: "Enter your blog topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter blog Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
    slug: "blog-topic-idea",
    aiPrompt:
      "Generate top 5 Blog Topic Ideas in bullet point only, (no Description) based on niche in rich text editor format",
    form: [
      {
        label: "Enter your Niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "Youtube SEO Title",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tools",
    icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
    slug: "youtube-seo-title",
    aiPrompt:
      "Give me Best SEO optimized high ranked 5 title ideas bullet wise only bases on keywords and outline and give me result in HTML tags format",
    form: [
      {
        label: "Enter your youtube video topic keyowords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter youtube description Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Description",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
    slug: "youtube-description",
    aiPrompt:
      "Generate Youtube description with emoji under 4-5 lines based on topic and outline in rich text editor format",
    form: [
      {
        label: "Enter your blog topic/title",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter youtube Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Tags",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    category: "Youtube Tool",
    icon: "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
    slug: "youtube-tag",

    aiPrompt:
      "Generate 10 Youtube tags in bullet point based on title and outline in rich text editor format",

    form: [
      {
        label: "Enter your youtube title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter youtube video Outline here (Optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },

  {
    name: "Rewrite Article (Plagiarism Free)",
    desc: "Use this tool to rewrite existing Article or Blog Post which can bypass AI detectors and also make it plagiarism free.",
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
    category: "Rewriting Tool",
    slug: "rewrite-article",
    aiPrompt:
      "Rewrite give article without any Plagiarism in rich text editor format",
    form: [
      {
        label:
          "🤖 Provide your Article/Blogpost or any other content to rewrite.",
        field: "textarea",
        name: "article",
        required: true,
      },
    ],
  },
  {
    name: "Text Improver",
    desc: "This handy tool refines your writing, eliminating errors and redundancies for a clear, readable result. It also offers a comprehensive tone analysis and suggests better word choices.",
    icon: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
    category: "Writing Assistant",
    slug: "text-improver",
    aiPrompt:
      "Given textToImprove, Rewrite text without any grammar mistake and professionally in rich text editor format",
    form: [
      {
        label: "Enter text that you want to re-write or improve",
        field: "textarea",
        name: "textToImprove",
      },
    ],
  },
  {
    name: "Add Emojis to Text",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
    category: "blog",
    slug: "add-emoji-to-text",
    aiPrompt:
      "Add Emoji to outline text depends on outline and rewrite it in rich text editor format",
    form: [
      {
        label: "Enter your text to add emojis",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post Generator",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
    category: "blog",

    slug: "instagram-post-generator",
    aiPrompt:
      "Generate 3 Instagram post depends on a given keywords and give output in  in rich text editor format",
    form: [
      {
        label: "Enter Keywords for your post",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Hash Tag Generator",
    desc: "An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.",
    icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
    category: "blog",

    slug: "instagram-hash-tag-generator",
    aiPrompt:
      "Generate 15 Instagram hash tag depends on a given keywords and give output in  in rich text editor format",
    form: [
      {
        label: "Enter Keywords for your instagram hastag",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post/Reel Idea",
    desc: "An AI tool that generate New and trending instagram idea depends on your niche",
    icon: "https://cdn-icons-png.flaticon.com/128/1029/1029183.png",
    category: "instagram",

    slug: "instagram-post-idea-generator",
    aiPrompt:
      "Generate 5-10 Instagram idea depends on niche with latest trend and give output in  in rich text editor format",
    form: [
      {
        label: "Enter Keywords / Niche for your instagram idea",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "English Grammer Check",
    desc: "AI Model to Correct your english grammer by providing the text",
    icon: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
    category: "english",

    slug: "english-grammer-checker",
    aiPrompt:
      "Rewrite the inputText by correcting the grammer and give output in  in rich text editor format",
    form: [
      {
        label: "Enter text to correct the grammer",
        field: "input",
        name: "inputText",
        required: true,
      },
    ],
  },
  {
    name: "Write Code",
    desc: "AI Model to generate programming code in any language",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    category: "Coding",

    slug: "write-code",
    aiPrompt:
      "Depends on user codeDescription write a code and give output in  in rich text editor format in code block ",
    form: [
      {
        label: "Enter description of code you want along with Programming Lang",
        field: "textarea",
        name: "codeDesscripton",
        required: true,
      },
    ],
  },
  {
    name: "Explain Code",
    desc: "AI Model to explain programming code in any language",
    icon: "https://cdn-icons-png.flaticon.com/128/8488/8488751.png",
    category: "Coding",

    slug: "explain-code",
    aiPrompt:
      "Depends on user codeDescription explain code line by line and give output in  in rich text editor format in code block ",
    form: [
      {
        label: "Enter code which you want to understand",
        field: "textarea",
        name: "codeDesscripton",
        required: true,
      },
    ],
  },
  {
    name: "Code Bug Detector",
    desc: "This tool analyzes your input, like error messages and code snippets, to pinpoint and fix bugs, offering detailed solutions and alternatives in a straightforward, user-friendly way.",
    icon: "https://cdn-icons-png.flaticon.com/128/4426/4426267.png",
    category: "code-bug-detector",

    slug: "code-bug-detector",
    aiPrompt:
      "Depends on user codeInput find bug in code and give solution and give output in  in rich text editor format in code block ",
    form: [
      {
        label: "Enter code which you want to test bug",
        field: "textarea",
        name: "codeInput",
        required: true,
      },
    ],
  },
  {
    name: "Tagline Generator",
    desc: "Struggling to find the perfect tagline for your brand? Let our AI-tool assist you in creating a tagline that stands out.",
    icon: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
    category: "Marketting",

    slug: "tagline-generator",
    aiPrompt:
      "Depends on user productName and outline generate catchy 5-10 tagline for the business product and give output  in rich text editor format ",
    form: [
      {
        label: "Product/Brand Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "What you are selling / Marketting",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Product Description",
    desc: "This is your AI-powered SEO expert, creating captivating and keyword-rich e-commerce product descriptions to boost your online sales.",
    icon: "https://cdn-icons-png.flaticon.com/128/679/679922.png",
    category: "Marketting",

    slug: "product-description",
    aiPrompt:
      "Depends on user productName and description generate small description for product for e-commer business give output  in rich text editor format  ",
    form: [
      {
        label: "Product Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Product Details",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Social Media Post Generator",
    desc: "Create engaging social media posts for any platform based on topic or brand details.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/733/733547.png",
    aiPrompt:
      "Generate a creative social media post for [platform] based on the topic [topic] and style [style]. Keep it under 150 characters.",
    slug: "generate-social-media-post",
    form: [
      {
        label: "Choose platform (e.g., Instagram, Twitter)",
        field: "dropdown",
        name: "platform",
        options: ["Instagram", "Twitter", "Facebook", "LinkedIn"],
        required: true,
      },
      {
        label: "Enter post topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Select style (e.g., professional, casual)",
        field: "dropdown",
        name: "style",
        options: ["Professional", "Casual", "Funny", "Inspirational"],
      },
    ],
  },
  {
    name: "Email Subject Line Generator",
    desc: "Generate catchy and relevant email subject lines based on the purpose of your email.",
    category: "Email",
    icon: "https://cdn-icons-png.flaticon.com/128/732/732200.png",
    aiPrompt:
      "Generate 5 compelling email subject lines for [purpose]. The tone should be [tone] and it should be optimized for [audience].",
    slug: "generate-email-subject",
    form: [
      {
        label: "Enter the purpose of the email",
        field: "input",
        name: "purpose",
        required: true,
      },
      {
        label: "Select tone",
        field: "dropdown",
        name: "tone",
        options: ["Formal", "Friendly", "Urgent", "Casual"],
        required: true,
      },
      {
        label: "Enter target audience",
        field: "input",
        name: "audience",
      },
    ],
  },
  {
    name: "Product Description Generator",
    desc: "An AI tool that helps you create detailed product descriptions for e-commerce or marketing purposes.",
    category: "E-commerce",
    icon: "https://cdn-icons-png.flaticon.com/128/1239/1239329.png",
    aiPrompt:
      "Create a compelling product description for the [product] focusing on [features]. Include key benefits and a call to action.",
    slug: "generate-product-description",
    form: [
      {
        label: "Enter product name",
        field: "input",
        name: "product",
        required: true,
      },
      {
        label: "Enter product features",
        field: "textarea",
        name: "features",
      },
    ],
  },
  {
    name: "Video Script Generator",
    desc: "Generate a script outline for promotional or educational videos based on a given topic and target audience.",
    category: "Video",
    icon: "https://cdn-icons-png.flaticon.com/128/1161/1161389.png",
    aiPrompt:
      "Write a video script for [purpose] that targets [audience]. Include a strong opening and closing statement.",
    slug: "generate-video-script",
    form: [
      {
        label: "Enter video purpose",
        field: "input",
        name: "purpose",
        required: true,
      },
      {
        label: "Enter target audience",
        field: "input",
        name: "audience",
      },
    ],
  },
  {
    name: "LinkedIn Headline Generator",
    desc: "Create compelling LinkedIn headlines that capture attention and drive engagement.",
    category: "LinkedIn",
    icon: "https://cdn-icons-png.flaticon.com/128/174/174857.png",
    aiPrompt:
      "Generate 5 attention-grabbing LinkedIn headlines based on the provided job title and industry.",
    slug: "linkedin-headline-generator",
    form: [
      {
        label: "Enter your job title",
        field: "input",
        name: "jobTitle",
        required: true,
      },
      {
        label: "Enter your industry",
        field: "input",
        name: "industry",
      },
    ],
  },
  {
    name: "Quora Answer Generator",
    desc: "Generate well-researched answers to Quora questions based on given topics and keywords.",
    category: "Quora",
    icon: "https://cdn-icons-png.flaticon.com/128/3046/3046860.png",
    aiPrompt:
      "Generate a comprehensive answer for a Quora question on [topic] using keywords [keywords].",
    slug: "quora-answer-generator",
    form: [
      {
        label: "Enter the Quora question topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter relevant keywords",
        field: "input",
        name: "keywords",
      },
    ],
  },
  {
    name: "Facebook Ad Copy Generator",
    desc: "Create persuasive Facebook ad copy tailored to your target audience and campaign goals.",
    category: "Facebook Ads",
    icon: "https://cdn-icons-png.flaticon.com/128/733/733547.png",
    aiPrompt:
      "Generate ad copy for a Facebook ad campaign based on the product [product], target audience [audience], and campaign objective [objective].",
    slug: "facebook-ad-copy-generator",
    form: [
      {
        label: "Enter the product or service",
        field: "input",
        name: "product",
        required: true,
      },
      {
        label: "Enter target audience",
        field: "input",
        name: "audience",
      },
      {
        label: "Enter campaign objective",
        field: "input",
        name: "objective",
      },
    ],
  },
  {
    name: "Press Release Generator",
    desc: "Draft professional press releases that effectively communicate your news or updates.",
    category: "Press Release",
    icon: "https://cdn-icons-png.flaticon.com/128/2787/2787274.png",
    aiPrompt:
      "Create a press release for [news] with a focus on [focus] and include a compelling headline and summary.",
    slug: "press-release-generator",
    form: [
      {
        label: "Enter the news or announcement",
        field: "input",
        name: "news",
        required: true,
      },
      {
        label: "Focus of the press release",
        field: "input",
        name: "focus",
      },
    ],
  },
  {
    name: "Resume Bullet Point Generator",
    desc: "Generate impactful resume bullet points that highlight your skills and accomplishments.",
    category: "Resume",
    icon: "https://cdn-icons-png.flaticon.com/128/483/483348.png",
    aiPrompt:
      "Generate 5 bullet points for a resume based on job role [role] and key achievements [achievements].",
    slug: "resume-bullet-point-generator",
    form: [
      {
        label: "Enter the job role",
        field: "input",
        name: "role",
        required: true,
      },
      {
        label: "Enter key achievements",
        field: "textarea",
        name: "achievements",
      },
    ],
  },
  {
    name: "Podcast Episode Title Generator",
    desc: "Generate engaging and attention-grabbing titles for your podcast episodes.",
    category: "Podcast",
    icon: "https://cdn-icons-png.flaticon.com/128/877/877865.png",
    aiPrompt:
      "Generate 5 podcast episode titles based on the episode topic [topic] and target audience [audience].",
    slug: "podcast-episode-title-generator",
    form: [
      {
        label: "Enter the episode topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter target audience",
        field: "input",
        name: "audience",
      },
    ],
  },
  {
    name: "Ebook Title Generator",
    desc: "Create captivating titles for ebooks that attract readers and boost sales.",
    category: "Ebook",
    icon: "https://cdn-icons-png.flaticon.com/128/6114/6114645.png",
    aiPrompt:
      "Generate 5 compelling ebook titles based on the ebook topic [topic] and genre [genre].",
    slug: "ebook-title-generator",
    form: [
      {
        label: "Enter the ebook topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter the genre",
        field: "input",
        name: "genre",
      },
    ],
  },
  {
    name: "Event Invitation Generator",
    desc: "Craft professional and engaging invitations for events based on the type and details.",
    category: "Event",
    icon: "https://cdn-icons-png.flaticon.com/128/1663/1663456.png",
    aiPrompt:
      "Generate an event invitation for [event] with details [details] and include RSVP information.",
    slug: "event-invitation-generator",
    form: [
      {
        label: "Enter the event name",
        field: "input",
        name: "event",
        required: true,
      },
      {
        label: "Enter event details",
        field: "textarea",
        name: "details",
      },
    ],
  },
  {
    name: "Webinar Outline Generator",
    desc: "Create detailed outlines for webinars to ensure a structured and engaging presentation.",
    category: "Webinar",
    icon: "https://cdn-icons-png.flaticon.com/128/2744/2744934.png",
    aiPrompt:
      "Generate an outline for a webinar on [topic] including key sections and talking points.",
    slug: "webinar-outline-generator",
    form: [
      {
        label: "Enter the webinar topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter key sections or objectives",
        field: "textarea",
        name: "sections",
      },
    ],
  },
  {
    name: "Customer Review Response Generator",
    desc: "Generate thoughtful and appropriate responses to customer reviews and feedback.",
    category: "Customer Service",
    icon: "https://cdn-icons-png.flaticon.com/128/1067/1067201.png",
    aiPrompt:
      "Create a response to a customer review based on the review content [review] and tone [tone].",
    slug: "customer-review-response-generator",
    form: [
      {
        label: "Enter the customer review",
        field: "textarea",
        name: "review",
        required: true,
      },
      {
        label: "Enter desired response tone",
        field: "dropdown",
        name: "tone",
        options: ["Professional", "Friendly", "Apologetic", "Grateful"],
        required: true,
      },
    ],
  },
  {
    name: "Marketing Campaign Slogan Generator",
    desc: "Generate memorable and impactful slogans for your marketing campaigns.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/1218/1218218.png",
    aiPrompt:
      "Generate 5 catchy slogans for a marketing campaign based on the product or service [product] and campaign objective [objective].",
    slug: "marketing-campaign-slogan-generator",
    form: [
      {
        label: "Enter the product or service",
        field: "input",
        name: "product",
        required: true,
      },
      {
        label: "Enter the campaign objective",
        field: "input",
        name: "objective",
      },
    ],
  },
];
