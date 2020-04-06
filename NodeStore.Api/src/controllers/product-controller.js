const repository = require('../repositories/product-repository');
const ValidationContract = require('../validators/fluent-validator');

exports.get = async(req, res, next) => {
    try {
        let data = await repository.get();

        res.status(200).send(data);
    } catch (err) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição',
            data: err
        });
    }
}

exports.getById = async(req, res, next) => {
    try {
        let data = await repository.getById(req.params.id);

        res.status(200).send(data);
    } catch (err) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição',
            data: err
        });
    }
}

exports.getBySlug = async(req, res, next) => {
    try {
        let data = await repository.getBySlug(req.params.slug);

        res.status(200).send(data);
    } catch (err) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição',
            data: err
        });
    }
}

exports.getByTag = async(req, res, next) => {
    try {
        let data = await repository.getByTag(req.params.tag);

        res.status(200).send(data);
    } catch (err) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição',
            data: err
        });
    }
}

exports.post = async(req, res, next) => {
    let valContract = new ValidationContract();

    valContract.hasMinLen(req.body.title, 3, 'O título deve conter pelo menos 3 caracteres.');
    valContract.hasMinLen(req.body.slug, 3, 'O slug deve conter pelo menos 3 caracteres.');
    valContract.hasMinLen(req.body.description, 3, 'A descrição deve conter pelo menos 3 caracteres.');

    if(!valContract.isValid()) {
        res.status(400).send(valContract.errors()).end();
        return;
    }

    try {
        await repository.create(req.body);

        res.status(201).send({
            message: 'Produto cadastrado com sucesso!'
        });
    } catch (err) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição',
            data: err
        });
    }
}

exports.put = async(req, res, next) => {
    let valContract = new ValidationContract();

    valContract.hasMinLen(req.body.title, 3, 'O título deve conter pelo menos 3 caracteres.');
    valContract.hasMinLen(req.body.slug, 3, 'O slug deve conter pelo menos 3 caracteres.');
    valContract.hasMinLen(req.body.description, 3, 'A descrição deve conter pelo menos 3 caracteres.');

    if(!valContract.isValid()) {
        res.status(400).send(valContract.errors()).end();
        return;
    }
    
    try {
        await repository.update(req.params.id, req.body);

        res.status(200).send({
            message: 'Produto atualizado com sucesso!'
        });
    } catch (err) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição',
            data: err
        });
    }
}

exports.delete = async(req, res, next) => {
    try {
        await repository.delete(req.params.id);

        res.status(200).send({
            message: 'Produto removido com sucesso!'
        });
    } catch (err) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição',
            data: err
        });
    }
}