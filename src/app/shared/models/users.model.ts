export interface User{
  "id": number,
  "email": string,
  "password": string,
  "fullname": string,
  "number": string,
  "telephone": string,
  "uid": string,
  "image_id": number,
  "created_at": Date,
  "updated_at": Date,
  "userRole": userRole[],
  "image": Image,
  "userLocation": Location[]
}
export interface userRole{
  "id": number,
  "role": Role
}

export interface Role{
  "name": string,
  "rolePermission": rolePermission[]
}
export interface rolePermission{
  "id": number,
  "permission": Permission
}
export interface Permission{
  "name": string
}
export interface Image{
  "uri": string,
  "name": string
}
export interface Location{
  "state": string,
  "address": string
}
export interface userR{
  "email": string,
  "password": string,
  "fullname": string,
  "number": number,
  "telephone": number,
  "uid": number,
  "role_id": number,
  "image": File,
}
