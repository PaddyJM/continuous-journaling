import { Progress } from '~/components/ui/progress'
import Animated, {
  LayoutAnimationConfig,
  FadeInUp,
  FadeOutDown,
} from 'react-native-reanimated'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Textarea } from './ui/textarea'
import { Text } from '~/components/ui/text'
import { View } from 'react-native'
import { Button } from '~/components/ui/button'

import React from 'react'

type JournalInputProps = {
  title: string, 
  icon_uri: string
  step: number
  nextStep: (steps: number) => void
}

export const JournalInput: React.FC<JournalInputProps> = ({
  title,
  icon_uri,
  step,
  nextStep,
}) => {
  const [progress, setProgress] = React.useState(0)

  const updateProgressValue = (e: any) => {
    const { value } = e.target
    if (value.length > 100) return
    setProgress(value.length)
  }

  return (
    <Card className="w-full max-w-sm p-6 rounded-2xl">
      <CardHeader className="items-center">
        <Avatar alt="Step 1 Icon" className="w-24 h-24">
          <AvatarImage source={{ uri: icon_uri }} />
          <AvatarFallback>
            <Text>RS</Text>
          </AvatarFallback>
        </Avatar>
        <View className="p-3" />

        <CardTitle className="pb-2 text-center">
          {title}
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
          onPress={() => nextStep(step)}
        >
          <Text>Done</Text>
        </Button>
      </CardFooter>
    </Card>
  )
}
