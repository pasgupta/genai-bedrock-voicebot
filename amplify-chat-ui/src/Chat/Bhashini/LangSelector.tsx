import { useAudio } from "../../context/useAudioContext";


const LANGUAGE_LIST = [
  { languageCode: "hi", languageName: "हिंदी", defaultName: "Hindi", isVisible: true },
  { languageCode: "ta", languageName: "தமிழ்", defaultName: "Tamil", isVisible: true },
  { languageCode: "te", languageName: "తెలుగు", defaultName: "Telugu", isVisible: true },
  { languageCode: "as", languageName: "অসমীয়া", defaultName: "Assamese", isVisible: true },
  { languageCode: "bn", languageName: "বাংলা", defaultName: "Bangali", isVisible: true },
  { languageCode: "gu", languageName: "ગુજરાતી", defaultName: "Gujarati", isVisible: true },
  { languageCode: "kn", languageName: "ಕನ್ನಡ", defaultName: "Kannad", isVisible: true },
  { languageCode: "ml", languageName: "മലയാളം", defaultName: "Malyalam", isVisible: true },
  { languageCode: "mr", languageName: "मराठी", defaultName: "Marathi", isVisible: true },
  { languageCode: "or", languageName: "ଓଡିଆ", defaultName: "Oriya", isVisible: true },
  { languageCode: "pa", languageName: "ਪੰਜਾਬੀ", defaultName: "Punjabi", isVisible: true },
  { languageCode: "brx", languageName: "Bodo", defaultName: "Bodo", isVisible: false },
  { languageCode: "sd", languageName: "Sindhi", defaultName: "Sindhi", isVisible: false },
  { languageCode: "ne", languageName: "नेपाली", defaultName: "Nepali", isVisible: false },
  { languageCode: "sa", languageName: "संस्कृतम्", defaultName: "Sanskrit", isVisible: false },
  { languageCode: "ur", languageName: "اردو", defaultName: "Urdu", isVisible: false },
  { languageCode: "kas", languageName: "کٲشُر", defaultName: "Kashmiri", isVisible: false },
  { languageCode: "kok", languageName: "कोंकणी", defaultName: "Konkani", isVisible: false },
  { languageCode: "mni", languageName: "Manipuri", defaultName: "Manipuri", isVisible: false },
  { languageCode: "doi", languageName: "Dogri", defaultName: "Dogri", isVisible: false },
  { languageCode: "sat", languageName: "Santali", defaultName: "Santali", isVisible: false },
  { languageCode: "mai", languageName: "मैथिली", defaultName: "Maithili", isVisible: false },
  { languageCode: "raj", languageName: "राजस्थानी", defaultName: "Rajasthani", isVisible: false },
  { languageCode: "bho", languageName: "भोजपुरी", defaultName: "Bhojpuri", isVisible: false },
  { languageCode: "si", languageName: "Sinhala", defaultName: "Sinhala", isVisible: false },
]

export default function LangSelector() {
  const { dispatch, translationLanguage } = useAudio()

  var select_list = LANGUAGE_LIST.map((item) => {
    return (
      <option key={item.languageCode} value={item.languageCode}>
        {item.defaultName} | {item.languageName}
      </option>
    )
  })

  return (
    <div>
      <label>Translation: </label>
      <select
        id="langSelector"
        className="align-right"
        value={translationLanguage}
        onChange={(e) => dispatch({ type: "SET_TRANSLATION_LANGUAGE", payload: e.target.value })}
      >
        <option value="">Select Language</option>
        {select_list}
      </select>
    </div>
  )
}