const responseHandler = (res, {type, message, data, meta}) => {
    let code = httpStatusCodes[type];
    let success = getSuccessCode(type);

    return res.status(code).json({
        success,
        message,
        data: data?data:[],
        meta: meta?meta:{}
    });
}

const httpStatusCodes = {
    failed: 400,
    authorization: 401,
    validation: 422,
    notfound: 404,
    error: 500,
    post: 201,
    updated: 202,
    success: 200
}

const getSuccessCode = (type) => {
    if (
      type === "failed" ||
      type === "validation" ||
      type === "authorization" ||
      type === "notfound" ||
      type === "error"
    )
      return 0;
    else return 1;
}


module.exports = responseHandler