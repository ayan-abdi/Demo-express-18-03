const memberMapper = (memberRow) => ({
    memberId: memberRow['MemberId'],
    email: memberRow['Email'], 
    passwordHash: memberRow['Password']
});

module.exports = {
    memberMapper
};