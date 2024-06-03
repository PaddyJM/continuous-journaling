import * as React from 'react'
import { View } from 'react-native'
import Animated, {
  FadeInUp,
  FadeOutDown,
  LayoutAnimationConfig,
} from 'react-native-reanimated'
import { JournalInput } from '~/components/JournalInput'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { Button } from '~/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card'
import { Progress } from '~/components/ui/progress'
import { Text } from '~/components/ui/text'
import { Textarea } from '~/components/ui/textarea'

const STEP1_ICON_URI =
  'https://i.pinimg.com/originals/94/b9/52/94b952ee642584804eed931f8a643ba2.png'

const STEP2_ICON_URI =
  'https://img.freepik.com/free-vector/umbrella-summer-protection_24877-82687.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709596800&semt=ais'

const STEP3_ICON_URI =
  'https://www.pngall.com/wp-content/uploads/2018/04/Construction-PNG-Pic.png'

export default function Screen() {
  const [progress, setProgress] = React.useState(0)
  const [step, setStep] = React.useState<number>(1)

  const nextStep = (step: number) => {
    if (step === 1) {
      setStep(2)
    } else if (step === 2) {
      setStep(3)
    }
  }

  return (
    <View className="flex-1 justify-center items-center gap-5 p-6 bg-secondary/30">
      {step === 1 && (
        <JournalInput
          title="What went well today?"
          icon_uri="https://i.pinimg.com/originals/94/b9/52/94b952ee642584804eed931f8a643ba2.png"
          step={step}
          nextStep={nextStep}
        />
      )}
      {step === 2 && (
        <JournalInput
          title="What could have gone better?"
          icon_uri="https://img.freepik.com/free-vector/umbrella-summer-protection_24877-82687.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709596800&semt=ais"
          step={step}
          nextStep={nextStep}
        />
      )}
      {step === 3 && (
        <JournalInput
          title="What are you going to do about it?"
          icon_uri="https://www.pngall.com/wp-content/uploads/2018/04/Construction-PNG-Pic.png"
          step={step}
          nextStep={nextStep}
        />
      )}
    </View>
  )
}
