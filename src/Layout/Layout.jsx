import styles from "./Layout.module.css"


function Layout({children}) {
  return (
    <>
    <header className={styles.header}>
      <div>
        <img src="./calendar.svg" alt="calendar" />
        <h4>Task-Week16</h4>
      </div>
    </header>
    {children}
    <footer className={styles.footer}>Developed By Milad Akbari | Botostart BOOTCAMP</footer>
    </>
  )
}

export default Layout