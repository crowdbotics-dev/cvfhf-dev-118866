import axios from "axios"
const cvfhfdevAPI = axios.create({
  baseURL: "https://cvfhf-dev-118866.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_vgdh_list(payload) {
  return cvfhfdevAPI.get(`/api/v1/vgdh/`)
}
function api_v1_vgdh_create(payload) {
  return cvfhfdevAPI.post(`/api/v1/vgdh/`, payload)
}
function api_v1_login_create(payload) {
  return cvfhfdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return cvfhfdevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return cvfhfdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return cvfhfdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return cvfhfdevAPI.patch(`/rest-auth/user/`, payload)
}
function api_docs_schema_retrieve(payload) {
  return cvfhfdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function rest_auth_login_create(payload) {
  return cvfhfdevAPI.post(`/rest-auth/login/`, payload)
}
function api_v1_vgdh_retrieve(payload) {
  return cvfhfdevAPI.get(`/api/v1/vgdh/${payload.id}/`)
}
function api_v1_vgdh_update(payload) {
  return cvfhfdevAPI.put(`/api/v1/vgdh/${payload.id}/`, payload)
}
function api_v1_vgdh_partial_update(payload) {
  return cvfhfdevAPI.patch(`/api/v1/vgdh/${payload.id}/`, payload)
}
function api_v1_vgdh_destroy(payload) {
  return cvfhfdevAPI.delete(`/api/v1/vgdh/${payload.id}/`)
}
function rest_auth_logout_retrieve(payload) {
  return cvfhfdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return cvfhfdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_registration_create(payload) {
  return cvfhfdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return cvfhfdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_change_create(payload) {
  return cvfhfdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return cvfhfdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return cvfhfdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
export const apiService = {
  api_v1_vgdh_list,
  api_v1_vgdh_create,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  api_v1_vgdh_retrieve,
  api_v1_vgdh_update,
  api_v1_vgdh_partial_update,
  api_v1_vgdh_destroy,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}
