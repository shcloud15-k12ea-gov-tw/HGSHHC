
/**
 * 取得 欣河公告
 * @param {any} sys sys列舉
 */
async function showShinherAnnouncement(sys) {
    var url = "https:" + getAuthUrl() + "/Common/GetShAnnouncementList";
    let postData = JSON.stringify({ sys: sys });

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: postData,
            credentials: 'include',
            cache: 'no-store',
        });

        const data = await response.json();

        if (data && data.Status === 'Success') {
            return data.Result;
        } else {
            // console.warn('Announcement data fetch failed with status: ' + data.Status);


        }
    } catch (error) {
        //  console.warn("Failed to fetch Shinher announcement:", error);
    }
}
