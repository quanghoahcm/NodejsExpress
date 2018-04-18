import { error } from "util";

const login = async (sql,user) =>{
    var request = sql.Request();
    await request
                 .input('username',sql.Nvarchar, user.username)
                 .input('password',sql.Nvarchar,user.password)
                 .query('SELECT * FROM user WHERE username = @username && password = @password', function(err,recordset){
                    if(err){
                        console.log(err);
                        return err;
                    }
                    return recordset;
                 });               
}
// const register = async (sql,user)=>{
//     var request = sql.Request();
//     console.log(user.username + user.password);
    
//     await request
//                 .input('username',sql.Nvarchar,user.username)
//                 .input('password',sql.Nvarchar,user.password )
//                 .query('INSERT INTO [user] (username,password) VALUE (@username, @password)', function(err){
//                     if(err ){
//                         console.log(err);
//                         return err;
//                     }
//                 })

// }
const registerUser = (sql, user) => {
    return new Promise((res, rej) => {
        const request = new sql.Request();     
        request.input('username', sql.NVarChar, user.username)
            .input('password', sql.NVarChar, user.password)
            .query('INSERT INTO [User] (username,password) VALUES (@username, @password)')
            .then(recordset => {
                res({
                    msg: "Insert " + recordset.rowsAffected + " project"
                },
                err=> {
                    console.log(err);
                    rej(err);
                })
            })
        
    });
}
module.exports = {login, registerUser}