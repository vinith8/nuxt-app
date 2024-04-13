export default defineEventHandler(async (event)=>{
    //access the params
    const {id} = event.context.params;

    //handle query params

    const {name} = useQuery(event);
    console.log("request ", event)

    //handle post data
    const {age} = await useBody(event)

    return {
        message: `Hello, Test message`,
        name: name
    }
})