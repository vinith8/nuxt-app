export default defineEventHandler(async (event)=>{
    //handle query params

    const {name} = useQuery(event);
    console.log("request ", event)

    j//handle post data
    const {age} = await useBody(event)

    return {
        message: `Hello, Test message`,
        name: name
    }
})