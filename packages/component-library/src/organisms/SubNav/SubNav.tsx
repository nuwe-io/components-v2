import { useEffect, useMemo, useState } from 'react'

import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'

import { ButtonLoader } from '../../atoms'

import { navigationBusiness } from '@nuwe/lib'
import { useRouter } from 'next/router'
import BreadcrumbNav from './BreadCrumbNav'
import { ActionButton, SubNavContainer } from './styles'

interface SubNavProps {
  buttonTitle?: string
  buttonAction?: () => void
  breadcrumbtitle?: string
  navProps: any
  type: string
  children?: any
  displayedTexts: {
    routeName: string
  }
}

export const SubNav = ({
  buttonTitle,
  buttonAction,
  breadcrumbtitle,
  navProps,
  type,
  displayedTexts,
  ...props
}: SubNavProps) => {
  const [currentRoute, setCurrentRoute] = useState('/business')
  const [navigationElements, setNavigationElements] = useState(() =>
    navigationBusiness[type](navProps || [])
  )

  const router = useRouter()

  const path = useMemo(() => router.basePath + router.asPath, [router.asPath, router.basePath])

  useEffect(() => {
    setCurrentRoute(path)
    setNavigationElements(selectedNavigation(navigationBusiness[type](navProps || []), path))
  }, [path, navProps, type, router])

  // set current route as selected inside navigation
  const selectedNavigation = (elements: any, current: any) =>
    elements.map((nav: any) => {
      return { ...nav, selected: nav.href === current }
    })

  const loadingFile = buttonTitle === 'Generating file'
  const isPdf = buttonTitle === 'Download'

  return (
    <div style={{ marginBottom: '10px' }}>
      <SubNavContainer>
        <BreadcrumbNav navigation={navigationElements} displayedTexts={displayedTexts} />
        <ActionButton id={`create-section-${buttonTitle}`}>
          {props.children ||
            (buttonTitle && (
              <ButtonLoader
                showStartIcon={isPdf}
                startIcon={<PictureAsPdfIcon style={{ marginRight: 10 }} />}
                loading={loadingFile}
                disabled={false}
                onClick={() => buttonAction && buttonAction()}
              >
                {buttonTitle}
              </ButtonLoader>
            ))}
        </ActionButton>
      </SubNavContainer>
    </div>
  )
}

SubNav.defaultProps = {
  routes: [],
  title: 'Create position'
}
