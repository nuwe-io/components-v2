// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/styles'

// ** Third Party Imports
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip
} from 'recharts'

// ** Icons Imports
import Circle from 'mdi-material-ui/Circle'

const CustomTooltip = (data: any) => {
  const { active, payload } = data
  if (active && payload) {
    const keys = data.labels
      .map((label: any) => ({
        [label.label[0]]: label.label,
        color: label.color,
        key: label.label[0],
        info: label.info
      }))
      .reduce((acc: any, item: any) => {
        acc[item.key] = {
          label: item[item.key],
          color: item.color,
          info: item.info
        }

        return acc
      }, {})

    return (
      <div className='recharts-custom-tooltip'>
        <Typography>{data.label}</Typography>
        <Divider />
        {data &&
          data.payload &&
          data.payload.map((i: any) => {
            return (
              <div key={i.dataKey}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Circle sx={{ color: i.fill, mr: 2.5, fontSize: '0.6rem' }} />
                  <span>
                    {i.dataKey}: {i.payload[i.dataKey]}%
                  </span>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Circle
                    sx={{ color: keys[i.payload.subject]?.color, mr: 2.5, fontSize: '0.6rem' }}
                  />
                  <span>
                    {keys[i.payload.subject]?.label}: {keys[i.payload.subject]?.info}
                  </span>
                </Box>
              </div>
            )
          })}
      </div>
    )
  }

  return null
}

interface CardWidgetsSoftSkillsProps {
  data: any
  labels: any
  username: string
  displayedTexts: {
    profileSoftSkills: string
  }
}

const CardWidgetsSoftSkills = ({
  data = [],
  labels = [],
  username = '',
  displayedTexts
}: CardWidgetsSoftSkillsProps) => {
  const theme = useTheme() as any

  return (
    <Card>
      <CardHeader
        title={displayedTexts.profileSoftSkills}
        titleTypographyProps={{ variant: 'h6' }}
      />
      <CardContent>
        <Box sx={{ height: 350 }}>
          <ResponsiveContainer>
            <RadarChart cx='50%' cy='50%' height={350} data={data} style={{ direction: 'ltr' }}>
              <PolarGrid />
              <PolarAngleAxis stroke={theme.palette.text.primary} dataKey='subject' />
              <Tooltip content={<CustomTooltip labels={labels} />} />
              <Radar
                dataKey={username}
                stroke={theme.palette.primary.mai}
                fill={`${theme.palette.primary.main}A2`}
                fillOpacity={1}
              />
            </RadarChart>
          </ResponsiveContainer>
        </Box>
        <Box sx={{ display: 'flex', mb: 6, justifyContent: 'center' }}>
          <Box sx={{ mr: 6, display: 'flex', alignItems: 'center' }}>
            <Circle sx={{ mr: 1.5, fontSize: '0.75rem', color: theme.palette.primary.main }} />
            <Typography>{username}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', mb: 3, justifyContent: 'center' }}>
          {labels?.map((label: any, i: number) => (
            <Box key={i} sx={{ mr: 3, display: 'flex', alignItems: 'center' }}>
              <Circle sx={{ mr: 1.5, fontSize: '0.75rem', color: label.color }} />
              <Typography variant='body2'>{label.label}</Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardWidgetsSoftSkills
