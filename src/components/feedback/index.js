import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HicetnuncContext } from '../../context/HicetnuncContext'
import { Loading } from '@atoms/loading'
import { Button, Purchase } from '@atoms/button'
import { fadeIn } from '../../utils/motion'
import styles from '@style'
import Markdown from 'markdown-to-jsx'

export const FeedbackComponent = () => {
  const context = useContext(HicetnuncContext)
  const { visible, message, progress, confirm, confirmCallback } =
    context.feedback

  return (
    <AnimatePresence>
      {visible && (
        <motion.div className={styles.container} {...fadeIn()}>
          <div className={styles.content}>
            {progress && <Loading />}
            <Markdown className={styles.message}>{message}</Markdown>
            {confirm && (
              <div className={styles.buttons}>
                <Button onClick={() => confirmCallback()}>
                  <Purchase>close</Purchase>
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
