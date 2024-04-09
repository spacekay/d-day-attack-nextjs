
export default function isCorrectSession(session: any) {
    if (!session) {
        return false;
    }
    if (!session.user) {
        return false;
    }
    if (session.user.email){
        return true;
    }
};