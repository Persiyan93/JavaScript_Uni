function validator(httpRequest) {
    let properties = ['method', 'uri', 'version', 'message'];
    let uriRegex = new RegExp('^[A-Za-z0-9\.\*]+$');
    let validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validMessage = new RegExp(`^[^<>\\&',"]+$`);
    let message = '';
    function validate(httpRequest) {
        properties.forEach(element => {
            if (!httpRequest.hasOwnProperty(element)) {
                message = element.charAt(0).toUpperCase() + element.slice(1);
            }
        });
        if (!validMethods.includes(httpRequest.method)) {
            message = 'Method';
        }
        else if (!httpRequest.uri.match(uriRegex)) {
            message = 'URI';
        }
        else if (!validVersion.includes(httpRequest.version)) {
            message = 'Version';
        }
        if (message != '') {
            throw new Error(`Invalid request header: Invalid ${message}`);
        }
        return httpRequest;

    }
}