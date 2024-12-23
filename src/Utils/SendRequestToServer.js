const sendRequestToServer = async (url, method, data = null, table) => {

    const successMessagePOST = `SUCCESS -> Added Task To Server[${table}]`;
    const successMessageGET = `SUCCESS -> Received Data From Server[${table}]`;
    const successMessageDELETE = `SUCCESS -> Added ID To Server[${table}]`;
    const successMessagePUT = `SUCCESS -> Added Task To Server for Updating[${table}]`;

    const errorMessagePOST = `ERROR -> Adding Task To Server[${table}]`;
    const errorMessageGET = `ERROR -> Getting Data From Server[${table}]`;
    const errorMessageDELETE = `ERROR -> Adding ID To Server[${table}]`;
    const errorMessagePUT = `ERROR -> Adding Task To Server for Updating[${table}]`;

    let errorMessage, successMessage;

    switch (method) {
        case 'POST':
            successMessage = successMessagePOST;
            errorMessage = errorMessagePOST;
            break;
        case 'GET':
            successMessage = successMessageGET;
            errorMessage = errorMessageGET;
            break;
        case 'DELETE':
            successMessage = successMessageDELETE;
            errorMessage = errorMessageDELETE;
            break;
        case 'PUT':
            successMessage = successMessagePUT;
            errorMessage = errorMessagePUT;
            break;
    }

    

    try {
        let response;
        if (method === "GET"){response = await fetch(url)

        }else if (method === "POST") {
            response = await fetch(url, {
                method: method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data) 
            });
            

        }else if(method === "DELETE") {
            
            response = await fetch(url, {
                method: method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({data}) 
            });

        }else if(method === "PUT"){
           
            response = await fetch(url, {
                method: method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data) 
            })

        }
        

        if (response.ok) {
            const responseData = await response.json();
            console.log(successMessage);
            if (responseData.data) {
                
                responseData.data = responseData.data.map(item => {
                    if (item.date) {
                        item.date = new Date(item.date);  
                        item.date = item.date.toISOString().split('T')[0];  
                    }
                    return item; 
                });
                return responseData.data;
            } else {
                return responseData;
            }
        } else {
            console.error(errorMessage);
        }
    } catch (error) {
        console.error(error);
    }
    return method === "GET" ? [] : null;
};

export { sendRequestToServer };
