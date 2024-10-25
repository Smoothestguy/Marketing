import { generateQuizzes } from './QuizData';

const quizzes = generateQuizzes();

export const courses = [
  {
    id: 1,
    icon: '📱',
    title: 'Social Media Marketing Mastery',
    description: 'Learn how to create engaging content that converts followers into customers.',
    duration: '4h 30m',
    level: 'Beginner',
    category: 'social',
    progress: 45,
    currentLesson: 3,
    totalLessons: 12,
    lessons: [
      {
        id: 1,
        title: 'Introduction to Social Media Marketing',
        duration: '15m',
        content: `
# Introduction to Social Media Marketing

Social media marketing is a powerful way to connect with your audience, build brand awareness, and drive business growth. In this lesson, we'll cover the fundamentals of social media marketing and why it's crucial for modern businesses.

## What is Social Media Marketing?

Social media marketing involves creating and sharing content on social media platforms to achieve your marketing goals. This can include:

- Building brand awareness
- Increasing website traffic
- Generating leads and sales
- Engaging with customers
- Building community

## Key Platforms Overview

### 1. Facebook
- Largest social network
- Diverse demographic reach
- Excellent for both B2C and B2B

### 2. Instagram
- Visual-focused platform
- Strong engagement rates
- Perfect for lifestyle and product brands

### 3. LinkedIn
- Professional networking
- B2B marketing
- Thought leadership

### 4. Twitter
- Real-time engagement
- News and updates
- Customer service

## Why Social Media Marketing Matters

1. **Reach**: Access to billions of potential customers
2. **Targeting**: Precise audience targeting capabilities
3. **Engagement**: Direct interaction with customers
4. **Analytics**: Measurable results and insights
5. **Cost-effective**: Lower cost than traditional marketing

## Getting Started

1. Define your goals
2. Choose your platforms
3. Create your profiles
4. Develop a content strategy
5. Start engaging with your audience

## Best Practices

- Be consistent with posting
- Engage with your audience
- Share valuable content
- Monitor your metrics
- Stay authentic`,
        quiz: quizzes.social[1]
      },
      {
        id: 2,
        title: 'Content Creation and Strategy',
        duration: '45m',
        content: `
# Content Creation and Strategy

Learn how to create compelling content that resonates with your audience and drives engagement.

## Content Types

1. **Visual Content**
   - Images
   - Videos
   - Infographics
   - Stories
   - Reels/TikToks

2. **Text Content**
   - Posts
   - Captions
   - Articles
   - Threads

3. **Interactive Content**
   - Polls
   - Quizzes
   - Q&As
   - Live streams

## Content Strategy Framework

### 1. Content Pillars
- Educational (40%)
- Entertainment (30%)
- Promotional (20%)
- Community (10%)

### 2. Content Calendar
- Plan ahead
- Maintain consistency
- Balance content types
- Consider timing

### 3. Brand Voice
- Define your tone
- Stay consistent
- Be authentic
- Reflect values

## Best Practices

1. **Quality Over Quantity**
   - High-quality visuals
   - Well-written copy
   - Professional editing
   - Brand consistency

2. **Platform Optimization**
   - Right format for each platform
   - Platform-specific features
   - Optimal timing
   - Native content

3. **Engagement Strategy**
   - Respond to comments
   - Ask questions
   - Create conversations
   - Build community`,
        quiz: quizzes.social[2]
      },
      {
        id: 3,
        title: 'Building and Engaging Your Community',
        duration: '30m',
        content: `
# Building and Engaging Your Community

Learn how to build and nurture an engaged social media community.

## Community Building Fundamentals

### 1. Understanding Your Audience
- Demographics
- Interests
- Pain points
- Goals

### 2. Engagement Strategies
- Respond promptly
- Ask questions
- Share user content
- Create discussions

### 3. Content Types for Community
- Behind-the-scenes
- User-generated content
- Q&A sessions
- Live events

## Building Trust

1. **Authenticity**
   - Be transparent
   - Share real stories
   - Show personality
   - Admit mistakes

2. **Consistency**
   - Regular posting
   - Quick responses
   - Clear messaging
   - Brand voice

3. **Value First**
   - Helpful content
   - Free resources
   - Expert advice
   - Community support

## Managing Growth

1. **Scaling Strategies**
   - Content calendar
   - Response templates
   - Team roles
   - Tools and automation

2. **Measuring Success**
   - Engagement rates
   - Growth rate
   - Response time
   - Sentiment analysis`,
        quiz: quizzes.social[3]
      },
      {
        id: 4,
        title: 'Advanced Social Media Advertising',
        duration: '1h',
        content: `
# Advanced Social Media Advertising

Master the art of paid social media marketing and advertising campaigns.

## Ad Strategy Development

### 1. Campaign Planning
- Goal setting
- Budget allocation
- Timeline creation
- KPI definition

### 2. Audience Targeting
- Custom audiences
- Lookalike audiences
- Interest targeting
- Behavioral targeting

### 3. Ad Formats
- Image ads
- Video ads
- Carousel ads
- Story ads
- Collection ads

## Advanced Targeting

1. **Pixel Implementation**
   - Installation
   - Event tracking
   - Custom conversions
   - Audience building

2. **Retargeting Strategies**
   - Website visitors
   - Engagement
   - Video viewers
   - Customer lists

3. **Optimization**
   - A/B testing
   - Budget optimization
   - Bid strategies
   - Placement optimization`,
        quiz: quizzes.social[4]
      },
      {
        id: 5,
        title: 'Analytics and Optimization',
        duration: '1h',
        content: `
# Analytics and Optimization

Master the art of analyzing and optimizing your social media performance.

## Key Metrics

### 1. Engagement Metrics
- Likes
- Comments
- Shares
- Saves
- Click-through rates

### 2. Reach Metrics
- Impressions
- Reach
- Follower growth
- Story views

### 3. Conversion Metrics
- Lead generation
- Sales
- Sign-ups
- Downloads

## Advanced Analysis

1. **Performance Analysis**
   - Content performance
   - Timing analysis
   - Audience insights
   - Competitor analysis

2. **ROI Calculation**
   - Cost per result
   - Return on ad spend
   - Customer lifetime value
   - Attribution modeling

3. **Optimization Strategies**
   - Content optimization
   - Timing optimization
   - Budget optimization
   - Audience refinement`,
        quiz: quizzes.social[5]
      }
    ]
  }
  // Additional courses will be added here
];