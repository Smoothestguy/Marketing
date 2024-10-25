export const generateQuizzes = () => ({
  // Social Media Marketing Course Quizzes
  social: {
    1: {
      questions: [
        {
          question: "Which of the following is NOT a key component of social media strategy?",
          options: [
            "Content planning",
            "Platform selection",
            "Hardware configuration",
            "Audience research"
          ],
          correctAnswer: 2,
          explanation: "Hardware configuration is not a key component of social media strategy. The main components include content planning, platform selection, audience research, and goal setting."
        },
        {
          question: "What is the recommended ratio for content types in social media marketing?",
          options: [
            "80% promotional, 20% engagement",
            "50% promotional, 50% engagement",
            "20% promotional, 80% value-based",
            "100% promotional content"
          ],
          correctAnswer: 2,
          explanation: "The 80/20 rule suggests using 80% value-based content and 20% promotional content to maintain audience engagement."
        }
      ]
    },
    2: {
      questions: [
        {
          question: "Which factor most significantly impacts engagement rates on social media?",
          options: [
            "Posting frequency",
            "Content quality and relevance",
            "Number of hashtags",
            "Account age"
          ],
          correctAnswer: 1,
          explanation: "While all factors matter, content quality and relevance are the most significant drivers of engagement on social media."
        },
        {
          question: "What is the optimal posting frequency for Instagram?",
          options: [
            "Once per month",
            "Once per week",
            "1-2 times per day",
            "Every hour"
          ],
          correctAnswer: 2,
          explanation: "For most businesses, posting 1-2 times per day on Instagram provides the best balance of engagement and content quality."
        },
        {
          question: "Which content type typically generates the highest engagement on social media?",
          options: [
            "Text-only posts",
            "Link shares",
            "Video content",
            "Plain images"
          ],
          correctAnswer: 2,
          explanation: "Video content consistently outperforms other content types in terms of engagement across most social media platforms."
        }
      ]
    },
    3: {
      questions: [
        {
          question: "Calculate the engagement rate for a post with 500 likes, 50 comments, and 10,000 followers.",
          options: [
            "5.5%",
            "0.55%",
            "55%",
            "0.055%"
          ],
          correctAnswer: 0,
          explanation: "Engagement rate = (Likes + Comments) / Followers × 100 = (500 + 50) / 10,000 × 100 = 5.5%"
        },
        {
          question: "What is the most effective way to handle negative comments?",
          options: [
            "Delete them immediately",
            "Ignore them completely",
            "Respond professionally and move conversation private",
            "Argue with the commenter"
          ],
          correctAnswer: 2,
          explanation: "The best practice is to acknowledge the issue publicly with a professional response, then move the conversation to private channels for resolution."
        },
        {
          question: "Which metric is most important for measuring community health?",
          options: [
            "Number of followers",
            "Engagement rate",
            "Post frequency",
            "Number of hashtags used"
          ],
          correctAnswer: 1,
          explanation: "Engagement rate is the most important metric as it shows how actively your community interacts with your content."
        },
        {
          question: "What is the recommended response time for social media inquiries?",
          options: [
            "Within 24 hours",
            "Within 1 hour",
            "Within 1 week",
            "No specific timeframe needed"
          ],
          correctAnswer: 1,
          explanation: "Industry standard suggests responding within 1 hour during business hours to maintain good customer service levels."
        }
      ]
    },
    4: {
      questions: [
        {
          question: "Calculate the ROAS for a campaign that spent $1000 and generated $5000 in sales.",
          options: [
            "5:1",
            "1:5",
            "500%",
            "Both A and C"
          ],
          correctAnswer: 3,
          explanation: "ROAS can be expressed as both a ratio (5:1) and a percentage (500%). Both answers are correct."
        },
        {
          question: "Which targeting option would be most effective for a B2B software company?",
          options: [
            "Interest in gaming",
            "Job titles and company size",
            "Relationship status",
            "Shopping behavior"
          ],
          correctAnswer: 1,
          explanation: "For B2B companies, targeting by job titles and company size is most effective as it reaches decision-makers."
        },
        {
          question: "What is a good CTR for Facebook ads across industries?",
          options: [
            "0.1%",
            "0.5-1.6%",
            "5-10%",
            "15-20%"
          ],
          correctAnswer: 1,
          explanation: "The average CTR for Facebook ads across all industries is between 0.5% and 1.6%."
        },
        {
          question: "Which bidding strategy should you use for a brand awareness campaign?",
          options: [
            "Cost per conversion",
            "Cost per click",
            "CPM (Cost per 1000 impressions)",
            "Cost per engagement"
          ],
          correctAnswer: 2,
          explanation: "For brand awareness campaigns, CPM bidding is most effective as the goal is to maximize visibility to your target audience."
        },
        {
          question: "Calculate the optimal budget allocation for a campaign with $10,000 budget across 4 ad sets based on performance data.",
          options: [
            "Equal split ($2,500 each)",
            "Based on historical ROAS",
            "All budget to top performer",
            "Based on audience size"
          ],
          correctAnswer: 1,
          explanation: "Budget allocation should be based on historical ROAS data to optimize campaign performance."
        }
      ]
    },
    5: {
      questions: [
        {
          question: "Using the data: Impressions=100,000, Clicks=2,000, Conversions=50, Revenue=$5,000, Cost=$1,000, calculate the full funnel conversion rate and ROAS.",
          options: [
            "CTR: 2%, CR: 2.5%, ROAS: 5x",
            "CTR: 2%, CR: 2.5%, ROAS: 500%",
            "CTR: 0.02%, CR: 0.05%, ROAS: 5x",
            "All of the above"
          ],
          correctAnswer: 3,
          explanation: "CTR = 2,000/100,000 = 2%, CR = 50/2,000 = 2.5%, ROAS = $5,000/$1,000 = 5x (or 500%). All expressions are correct."
        },
        {
          question: "Which statistical method should be used to determine the significance of A/B test results?",
          options: [
            "Mean average",
            "Chi-square test",
            "Standard deviation",
            "Median calculation"
          ],
          correctAnswer: 1,
          explanation: "Chi-square test is the appropriate statistical method for determining the significance of A/B test results in marketing."
        },
        {
          question: "Create a comprehensive attribution model for a multi-channel campaign including social media, email, and paid search.",
          options: [
            "Last-click attribution",
            "First-click attribution",
            "Linear attribution",
            "Position-based attribution"
          ],
          correctAnswer: 3,
          explanation: "Position-based attribution (40/20/40) is most appropriate for multi-channel campaigns as it gives credit to both introduction and conversion touchpoints while acknowledging middle interactions."
        },
        {
          question: "Calculate the predicted LTV for a customer cohort with: Average purchase value=$100, Purchase frequency=4x/year, Average customer lifespan=3 years, Churn rate=25%",
          options: [
            "$1,200",
            "$900",
            "$1,800",
            "$1,350"
          ],
          correctAnswer: 0,
          explanation: "LTV = Average purchase value × Purchase frequency × Average customer lifespan = $100 × 4 × 3 = $1,200"
        },
        {
          question: "Develop a cohort analysis strategy for identifying the most valuable customer acquisition channels.",
          options: [
            "Analyze total revenue by channel",
            "Compare conversion rates",
            "Track cohort retention and LTV by acquisition source",
            "Monitor traffic sources"
          ],
          correctAnswer: 2,
          explanation: "Tracking cohort retention and LTV by acquisition source provides the most comprehensive view of channel value over time."
        }
      ]
    }
  },
  // Add similar structures for other course categories (SEO, Email, Analytics)
  // Each with progressively harder questions
});