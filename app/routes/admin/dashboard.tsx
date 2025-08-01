import { Header, StatCard, TripCard } from "components";


function Dashboard() {
    const user = {name: 'Otega Otite'}

    const dashboardStats = {
        totalUsers: 12450,
        usersJoined: { currentMonth: 218, lastMonth: 176},
        totalTrips: 3210,
        tripsCreated: { currentMonth: 150, lastMonth: 250},
        userRole: {total: 62, currentMonth: 25, lastMonth: 15}
    }
    const { totalUsers, usersJoined, totalTrips, tripsCreated, userRole} = dashboardStats

    return (
        <main className="dashboard wrapper">
            <Header 
                title={`Welcome ${user?.name ?? 'Guest'} `}
                paragraph="Track activity, trends and popular destinations in real time" 
            />

            <section className="flex flex-col gap-6">
                <div className="grid grids-cols-1 md:grid-cols-3 gap-6">
                    <StatCard 
                        headerTitle="Total User"
                        total={totalUsers}
                        currentMonthCount={usersJoined.currentMonth}
                        lastMonthCount={usersJoined.lastMonth}
                    />
                    <StatCard 
                        headerTitle="Total Trips"
                        total={totalTrips}
                        currentMonthCount={usersJoined.currentMonth}
                        lastMonthCount={usersJoined.lastMonth}
                    />
                    <StatCard 
                        headerTitle="Active Users Today"
                        total={userRole.total}
                        currentMonthCount={usersJoined.currentMonth}
                        lastMonthCount={usersJoined.lastMonth}
                    />
                    <TripCard />
                </div>
            </section>
        </main>
    )
}
export default Dashboard;