import axios from "axios"

class ApiClient {
  constructor(remoteHostUrl) {
    this.remoteHostUrl = remoteHostUrl
    this.token = null
    this.tokenName = "token"
  }

  setToken(token) {
    this.token = token
    localStorage.setItem(this.tokenName, token)
  }

  async request ({endpoint, method = `GET`, data = {}}){
    const url = `${this.remoteHostUrl}/${endpoint}`
   
    const headers = {
        "Content-Type": "application/json",
    }

    if (this.token) {
        headers["Authorization"] = `Bearer ${this.token}`
    }
    try{
        const res = await axios({url, method, data, headers})
        return {data: res.data, error: null}
    } 
    catch(error){
        console.error({errorResponse: error.response})
        const message = error?.response?.data?.error?.message
    return {data: null, error: message}
    }
}

  async fetchNutrition() {
    return await this.request({ endpoint: `nutrition/`, method: `GET` })
  }

  async listNutrition() {
    return await this.request({ endpoint: `nutrition`, method: `GET` })
  }

  async createNutrition(newNutrition) {
    return await this.request({ endpoint: `nutrition`, method: `POST`, data: newNutrition })
  }

  async fetchNutritionById(nutritionId) {
    return await this.request({ endpoint: `nutrition/id/${nutritionId}`, method: `GET` })
  }

  async fetchUserFromToken() {
    return await this.request({ endpoint: `auth/me`, method: `GET` })
  }
  async fetchActivity() {
    return await this.request({ endpoint: `activity`, method: `GET` })
  }

  async signupUser(credentials) {
    return await this.request({ endpoint: `auth/register`, method: `POST`, data: credentials })
  }

  async loginUser(credentials) {
    return await this.request({ endpoint: `auth/login`, method: `POST`, data: credentials })
  }

  async logoutUser() {
    this.setToken(null)
    localStorage.setItem(this.tokenName, "")
  }
}

export default new ApiClient("http://localhost:3001")