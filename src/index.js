import trackEvent from './api/trackEvent'
import updateUserProfile from './api/updateUserProfile'

export default mixpanel = ({
  token,
  distinctId,
  userProfileData,
  eventName,
  properties,
}) => {

  // Track action event with Mixpanel
  trackEvent({
    token,
    distinctId,
    eventName: eventName,
    eventData: properties
  })

  // Select user profile data for action; if it selects truthy data,
  // update user profile on Mixpanel
  if (userProfileData) {
    updateUserProfile({
      token,
      distinctId,
      userProfileData,
    })
  }
}
