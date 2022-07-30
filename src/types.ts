export type Employee = {
  id: number
  avatar_url: string
  name: string
  position: string
  service_ids: number[]
}

export type Service = {
  id: number
  name: string
  website_url: string
  logo_url: string
  price: {
    cost_per_user: number
    flat_cost: number
    nb_users_included: number
  }
}

export type Filter = {
  id: number
  name: string
}
