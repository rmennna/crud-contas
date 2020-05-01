import { http } from './index'

export default {
    listar: () => {
        return http.get('contas')
    }
}