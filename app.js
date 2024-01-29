const express = require('express');
const { HttpException, BadRequestException, UnauthorizedException, ForbiddenException, NotFoundException, InternalServerErrorException } = require('@rafikidota/http-exceptions');
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

app.get('/http-exception', (req, res) => {
    throw new HttpException('Not Implemented', 501);
});

app.get('/bad-request', (req, res) => {
    throw new BadRequestException('An bad request example');
});

app.get('/unauthorized', (req, res) => {
    throw new UnauthorizedException('An unauthorized example');
});

app.get('/forbidden', (req, res) => {
    throw new ForbiddenException('A forbidden example');
});

app.get('/not-found', (req, res) => {
    throw new NotFoundException('An not found example');
});

app.get('/internal-server-error', (req, res) => {
    throw new InternalServerErrorException('An internal server error example');
});

app.use((error, req, res, next) => {
    const { name, message, status } = error;
    return res.status(status || 500).json({ name, message, status });
});