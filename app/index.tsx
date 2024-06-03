import * as React from 'react'
import { View } from 'react-native'
import Animated, {
  FadeInUp,
  FadeOutDown,
  LayoutAnimationConfig,
} from 'react-native-reanimated'
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

type Steps = 'step1' | 'step2' | 'step3'

const STEP1_ICON_URI =
  'https://i.pinimg.com/originals/94/b9/52/94b952ee642584804eed931f8a643ba2.png'

const STEP2_ICON_URI =
  'https://img.freepik.com/free-vector/umbrella-summer-protection_24877-82687.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709596800&semt=ais'

const STEP3_ICON_URI =
  'https://www.pngall.com/wp-content/uploads/2018/04/Construction-PNG-Pic.png'

export default function Screen() {
  const [progress, setProgress] = React.useState(0)
  const [step, setStep] = React.useState<Steps>('step1')

  const updateProgressValue = (e: any) => {
    const { value } = e.target
    if (value.length > 100) return
    setProgress(value.length)
  }

  return (
    <View className="flex-1 justify-center items-center gap-5 p-6 bg-secondary/30">
      {step === 'step1' && (
        <Card className="w-full max-w-sm p-6 rounded-2xl">
          <CardHeader className="items-center">
            <Avatar alt="Step 1 Icon" className="w-24 h-24">
              <AvatarImage source={{ uri: STEP1_ICON_URI }} />
              <AvatarFallback>
                <Text>RS</Text>
              </AvatarFallback>
            </Avatar>
            <View className="p-3" />

            <CardTitle className="pb-2 text-center">
              What went well today?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <View className="flex-row justify-around gap-3">
              <Textarea
                className="text-sm text-muted-foreground"
                onChange={updateProgressValue}
              />
            </View>
          </CardContent>
          <CardFooter className="flex-col gap-3 pb-0">
            <View className="flex-row items-center overflow-hidden">
              <Text className="text-sm text-muted-foreground">Completed:</Text>
              <LayoutAnimationConfig skipEntering>
                <Animated.View
                  key={progress}
                  entering={FadeInUp}
                  exiting={FadeOutDown}
                  className="w-11 items-center"
                >
                  <Text className="text-sm font-bold text-sky-600">
                    {progress}%
                  </Text>
                </Animated.View>
              </LayoutAnimationConfig>
            </View>
            <Progress
              value={progress}
              className="h-2"
              indicatorClassName="bg-sky-600"
            />
            <View />
            <Button
              variant="outline"
              className="shadow shadow-foreground/5"
              onPress={() => setStep('step2')}
            >
              <Text>Done</Text>
            </Button>
          </CardFooter>
        </Card>
      )}
      {step === 'step2' && (
        <Card className="w-full max-w-sm p-6 rounded-2xl">
          <CardHeader className="items-center">
            <Avatar alt="Step 2 Icon" className="w-24 h-24">
              <AvatarImage source={{ uri: STEP2_ICON_URI }} />
              <AvatarFallback>
                <Text>RS</Text>
              </AvatarFallback>
            </Avatar>
            <View className="p-3" />

            <CardTitle className="pb-2 text-center">
              What could have gone better?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <View className="flex-row justify-around gap-3">
              <Textarea
                className="text-sm text-muted-foreground"
                onChange={updateProgressValue}
              />
            </View>
          </CardContent>
          <CardFooter className="flex-col gap-3 pb-0">
            <View className="flex-row items-center overflow-hidden">
              <Text className="text-sm text-muted-foreground">Completed:</Text>
              <LayoutAnimationConfig skipEntering>
                <Animated.View
                  key={progress}
                  entering={FadeInUp}
                  exiting={FadeOutDown}
                  className="w-11 items-center"
                >
                  <Text className="text-sm font-bold text-sky-600">
                    {progress}%
                  </Text>
                </Animated.View>
              </LayoutAnimationConfig>
            </View>
            <Progress
              value={progress}
              className="h-2"
              indicatorClassName="bg-sky-600"
            />
            <View />
            <Button
              variant="outline"
              className="shadow shadow-foreground/5"
              onPress={() => setStep('step3')}
            >
              <Text>Done</Text>
            </Button>
          </CardFooter>
        </Card>
      )}
      {step === 'step3' && (
        <Card className="w-full max-w-sm p-6 rounded-2xl">
          <CardHeader className="items-center">
            <Avatar alt="Step 2 Icon" className="w-24 h-24">
              <AvatarImage source={{ uri: STEP3_ICON_URI }} />
              <AvatarFallback>
                <Text>RS</Text>
              </AvatarFallback>
            </Avatar>
            <View className="p-3" />

            <CardTitle className="pb-2 text-center">
              What are we going to do about it?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <View className="flex-row justify-around gap-3">
              <Textarea
                className="text-sm text-muted-foreground"
                onChange={updateProgressValue}
              />
            </View>
          </CardContent>
          <CardFooter className="flex-col gap-3 pb-0">
            <View className="flex-row items-center overflow-hidden">
              <Text className="text-sm text-muted-foreground">Completed:</Text>
              <LayoutAnimationConfig skipEntering>
                <Animated.View
                  key={progress}
                  entering={FadeInUp}
                  exiting={FadeOutDown}
                  className="w-11 items-center"
                >
                  <Text className="text-sm font-bold text-sky-600">
                    {progress}%
                  </Text>
                </Animated.View>
              </LayoutAnimationConfig>
            </View>
            <Progress
              value={progress}
              className="h-2"
              indicatorClassName="bg-sky-600"
            />
            <View />
            <Button
              variant="outline"
              className="shadow shadow-foreground/5"
              onPress={() => {}}
            >
              <Text>Done</Text>
            </Button>
          </CardFooter>
        </Card>
      )}
    </View>
  )
}
