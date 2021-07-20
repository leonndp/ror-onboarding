export const isBrowser = () => typeof window !== "undefined"
export const getUser = () =>
  isBrowser() && window.localStorage.getItem("rorUser")
    ? JSON.parse(window.localStorage.getItem("rorUser"))
    : {}
const setUser = user =>
  window.localStorage.setItem("rorUser", JSON.stringify(user))
export const handleLogin = password => {
  if (password === `CRUNCH20`) {
    return setUser({
      username: `user`,
    })
  }
  return false
}

export const isLoggedIn = () => {
  const user = getUser()
  return !!user.username
}
export const logout = callback => {
  setUser({})
  callback()
}
