'use client';

import { useState } from 'react';
import { ChevronLeft, RotateCcw } from 'lucide-react';

interface QuizQuestion {
  id: number;
  question: string;
  answers: {
    text: string;
    category: string;
  }[];
}

interface QuizResult {
  category: string;
  title: string;
  description: string;
  recommendation: string;
  relatedService: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'מה סוג השיער שלך?',
    answers: [
      { text: 'ישיר וחלק', category: 'straight' },
      { text: 'גלי', category: 'wavy' },
      { text: 'קורלי/מתולתל', category: 'curly' },
      { text: 'מאוד מתולתל', category: 'coily' },
    ],
  },
  {
    id: 2,
    question: 'כמה עבה השיער שלך?',
    answers: [
      { text: 'דק וחלש', category: 'thin' },
      { text: 'בינוני', category: 'medium' },
      { text: 'עבה וצפוף', category: 'thick' },
      { text: 'משתנה', category: 'variable' },
    ],
  },
  {
    id: 3,
    question: 'מה סוג הקרקפת שלך?',
    answers: [
      { text: 'יבשה', category: 'dry' },
      { text: 'רגילה', category: 'normal' },
      { text: 'שומנית', category: 'oily' },
      { text: 'רגישה', category: 'sensitive' },
    ],
  },
  {
    id: 4,
    question: 'האם אתה חוקה את השיער שלך?',
    answers: [
      { text: 'כן, בצבעים וטיפולים', category: 'damaged' },
      { text: 'קצת בצבע בלבד', category: 'mild-treatment' },
      { text: 'לא, טבעי', category: 'natural' },
      { text: 'הרבה - חום, צבע, כל דבר', category: 'heavily-damaged' },
    ],
  },
  {
    id: 5,
    question: 'מה הבעיה העיקרית שלך עם השיער?',
    answers: [
      { text: 'נשירה או התייקה בשיער', category: 'hair-loss' },
      { text: 'שיער דק או דליל', category: 'thin-hair' },
      { text: 'קשקשים או גירוד', category: 'scalp-issues' },
      { text: 'בעיות עם כיסוי ומראה טבעי', category: 'coverage-natural' },
    ],
  },
  {
    id: 6,
    question: 'לאיזה סיבה אתה מחפש פתרון?',
    answers: [
      { text: 'בריאות רפואית', category: 'medical' },
      { text: 'בחירה אישית וחופש עיצוב', category: 'fashion' },
      { text: 'בחירת עיצוב וחיזוי גם בו זמנית', category: 'both' },
      { text: 'בדיקה של אפשרויות', category: 'explore' },
    ],
  },
];

const quizResults: Record<string, QuizResult> = {
  'thin-hair': {
    category: 'thin-hair',
    title: 'טופר שיער לשיער דליל',
    description:
      'בהתאם לתשובותיך, נראה שאתה מחפש פתרון לשיער דליל או לא צפוף מספיק. טופרים שלנו מתוכננים ל לתת נפח וכיסוי מלא.',
    recommendation:
      'טופר שיער בהתאמה אישית יכול להעניק לך הופעה מלאה וטבעית. אנחנו משתמשים בשיער אמיתי ובתהליך התאמה מדוקדק לתוצאות מושלמות.',
    relatedService: '/hair-toppers-thin-hair',
  },
  'hair-loss': {
    category: 'hair-loss',
    title: 'פאה רפואית',
    description:
      'נראה שאתה מתמודד עם נשירה או התייקה בשיער. פאות רפואיות שלנו מכוונות לתת לך חזרה את הביטחון והנוכחות שלך.',
    recommendation:
      'פאה רפואית בהתאמה אישית מונוקי שלנו מעניקה כיסוי מלא, קל ותומך מודגש. אנחנו מציעים טיפול אישי מלא כדי למצוא את ההתאמה המושלמת.',
    relatedService: '/medical-wigs',
  },
  'fashion': {
    category: 'fashion',
    title: 'פאות בהתאמה אישית',
    description:
      'אתה מחפש חופש עיצוב וגמישות! פאות בהתאמה אישית שלנו מאפשרות לך לנסות סגנונות, צבעים ואורכים שונים.',
    recommendation:
      'בחר מפאות בהתאמה אישית שלנו בשיער אמיתי או סינתטי. כל פאה עשויה מהשיער הטוב ביותר עם טיפול וקיבוע מעולה.',
    relatedService: '/custom-wigs',
  },
  'medical': {
    category: 'medical',
    title: 'פאה רפואית מקצועית',
    description:
      'אתה מעוניין בפתרון רפואי. פאות רפואיות שלנו מתוכננות לנוחות מרבית ולמראה טבעי.',
    recommendation:
      'אנחנו מוכנים לעבוד עם צרכים רפואיים מיוחדים. יש לנו חומרים קלים, נושמים וחומרים הידוקיים מיוחדים.',
    relatedService: '/medical-wigs',
  },
  'coverage-natural': {
    category: 'coverage-natural',
    title: 'טופר בהתאמה אישית',
    description:
      'אתה מחפש כיסוי מלא עם מראה טבעי. טופרים בהתאמה אישית שלנו הם הפתרון המושלם.',
    recommendation:
      'טופרים שלנו משלבים שיער אמיתי עם בסיס קל וטבעי. אנחנו מתאימים אותם בדיוק ל צרכיך הייחודיים.',
    relatedService: '/hair-toppers',
  },
  'explore': {
    category: 'explore',
    title: 'אנחנו כאן לעזור',
    description:
      'מעולה שאתה בודק אפשרויות! אנחנו מציעים מגוון פתרונות לשיער מכל סוג ולכל צורך.',
    recommendation:
      'בואו לביקור בסלון שלנו לייעוץ אישי מלא. נוכל לעزור לך למצוא את הפתרון המושלם.',
    relatedService: '/book',
  },
};

export default function HairQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [userResult, setUserResult] = useState<QuizResult | null>(null);

  const handleAnswer = (category: string) => {
    const newAnswers = [...selectedAnswers, category];
    setSelectedAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (answers: string[]) => {
    // Weight the answers to determine the best result
    const categoryCount = answers.reduce(
      (acc, cat) => {
        acc[cat] = (acc[cat] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    let resultKey = 'explore';
    let maxCount = 0;

    // Priority mapping for better recommendations
    const priorityMap: Record<string, string> = {
      'hair-loss': 'hair-loss',
      'thin': 'thin-hair',
      'damaged': 'fashion',
      'heavily-damaged': 'fashion',
      'medical': 'medical',
      'coverage-natural': 'coverage-natural',
    };

    // First check for priority categories
    for (const key of Object.keys(categoryCount)) {
      if (priorityMap[key]) {
        resultKey = priorityMap[key];
        break;
      }
    }

    // Fallback to most common answer
    if (resultKey === 'explore') {
      for (const [key, count] of Object.entries(categoryCount)) {
        if (count > maxCount) {
          maxCount = count;
          resultKey = key;
        }
      }
    }

    const finalResult =
      quizResults[resultKey] || quizResults['explore'];
    setUserResult(finalResult);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setUserResult(null);
  };

  if (showResults && userResult) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4" dir="rtl">
        <div className="max-w-2xl mx-auto">
          {/* Results Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-navy-900 to-navy-800 text-white p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {userResult.title}
              </h2>
              <p className="text-lg opacity-90">{userResult.description}</p>
            </div>

            <div className="p-8 md:p-12">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  ההמלצה שלנו:
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {userResult.recommendation}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row gap-4">
                <a
                  href={userResult.relatedService}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-navy-900 text-white rounded-xl hover:bg-navy-800 transition-all duration-200 font-semibold active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500"
                >
                  <ChevronLeft size={20} />
                  <span>למידע נוסף</span>
                </a>
                <button
                  onClick={() => {
                    window.location.href = '/book';
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-green-50 text-green-700 rounded-xl hover:bg-green-100 transition-all duration-200 font-semibold border-2 border-green-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <ChevronLeft size={20} />
                  <span>קביעת ייעוץ</span>
                </button>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetQuiz}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-200 font-semibold active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <RotateCcw size={18} />
                <span>בצע את החידון שוב</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4" dir="rtl">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            חידון שיער
          </h1>
          <p className="text-xl text-gray-600">
            עזור לנו למצוא את הפתרון המושלם עבורך
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-gray-600">
              שאלה {currentQuestion + 1} מתוך {quizQuestions.length}
            </span>
            <span className="text-sm font-semibold text-gray-600">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-navy-600 to-navy-900 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-8">
            {quizQuestions[currentQuestion].question}
          </h2>

          {/* Answer Options */}
          <div className="space-y-3">
            {quizQuestions[currentQuestion].answers.map((answer, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(answer.category)}
                className="w-full text-right px-6 py-4 rounded-xl border-2 border-gray-200 hover:border-navy-900 hover:bg-navy-50 transition-all duration-200 font-semibold text-gray-800 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500 hover:text-navy-900"
              >
                {answer.text}
              </button>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-center text-sm text-gray-500">
              {currentQuestion + 1} / {quizQuestions.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
