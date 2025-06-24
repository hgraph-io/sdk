declare module '*.gql' {
  const content: string;
  export default content;
}

declare module '../../graphql-ws/src' {
  export interface Client {}
  export function createClient(): Client;
}

declare module "../../graphql-ws/src/index" {
  export interface Client {}
  export function createClient(): Client;
}
