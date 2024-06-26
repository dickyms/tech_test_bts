'use strict'

module.exports = (db) => {
    var userSchema = new db.Schema(
        {  
            username: {
                type: String,
                required: true,
                unique: true
            },
            email: {
                type: String,
                required: true
            },
            password: {
                type: String,
                required: true
            }
        },
        {
            timestamps: {
                createdAt: 'created_at',
                updatedAt: 'updated_at'
            }
        }
    );
    return db.model('Users', userSchema);
};