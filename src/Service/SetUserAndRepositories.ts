import { GetUser, GetUserRepositorys } from './GithubUsers.service'

export const SetUserAndRepositories = async (
  user: string,
  setLoadingState: (isLoading: boolean) => void,
  setUserInfo: (userInfo: any) => void,
  setShowAlert: (showAlert: boolean) => void,
  navigate: any
) => {
  setLoadingState(true)

  try {
    const userData = await GetUser(user)

    const reposData = await GetUserRepositorys(user)
    const filteredRepos = reposData.map((repo: any) => ({
      name: repo.name,
      language: repo.language,
      url: repo.svn_url,
      description: repo.description,
      visibility: repo.visibility
    }))

    setUserInfo({
      avatar_url: userData.avatar_url,
      bio: userData.bio,
      name: userData.name,
      login: userData.login,
      repositoriesList: filteredRepos
    })
  } catch (error) {
    setShowAlert(true)
    navigate('/')
  } finally {
    setLoadingState(false)
  }
}
