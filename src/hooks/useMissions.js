import{useQuery,gql}from '@apollo/client'

const GET_MISSION = gql`
{
  launchesPast {
    id
    mission_name
    details
    launch_year
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      flickr_images
      article_link
      video_link
      wikipedia
    }
    rocket {
      rocket_name
    }
  }
}
`

export const useMissions = () =>{
    const {error,loading,data} = useQuery(GET_MISSION)
return {
    error,
    loading,
    data
}

}