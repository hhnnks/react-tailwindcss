export default [
    {
        url: '/api/menu/list',
        method: 'get',
        response: () => {
            return {
                code: 200,
                message: 'ok',
                data: '[]'
            }
        }
    }
]