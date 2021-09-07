import { app, http } from '@shared/infra/http/app';

// app.listen(3030,()=>{
//     console.log("Running");
// })

http.listen(3030, () => {
    console.log("Running");
})