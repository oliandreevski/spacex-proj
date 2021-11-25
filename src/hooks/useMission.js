import { gql, useQuery } from '@apollo/client';

const GET_MISSION = gql`
query GetMission($id: ID!)
    {
  launch(id: $id) {
    id
    launch_site {
      site_name
    }
    launch_year
    mission_name
    rocket {
      rocket_name
      rocket_type
      rocket {
        country
        height {
          meters
        }
        mass {
          kg
        }
        engines {
          number
        }
        cost_per_launch
        description
      }
    }
    details
    launch_date_local
    links {
      flickr_images
    }
  }
}

`

export const useMission = (id) => {
    const{error,loading,data} = useQuery(GET_MISSION, {
        variables: {
            id
        }
    })

return {
    error,
    loading,
    data
}
}