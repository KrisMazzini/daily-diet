export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      stats: undefined
      new: undefined
      feedback: {
        withinDiet: boolean
      }
      info: {
        id: string
        name: string
        description: string
        datetime: string
        withinDiet: boolean
      }
    }
  }
}
