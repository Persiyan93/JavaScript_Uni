function validator(http) {
    if (http[method] != 'GET' && http[method] != 'POST' && http[method] != 'DELETE' &&http[method]!='CONNECT') {
        throw new Error('Invalid request header: Invalid {Method}');
    }
}