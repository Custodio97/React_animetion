import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

export const useScroll = (thresh=0.1) => {
    const constrols = useAnimation()
    const [element, view] = useInView({ threshold: thresh })
    
    if (view) {
        constrols.start("show")
    } else {
        constrols.start("hidden")
    }

    return [element,constrols]
}