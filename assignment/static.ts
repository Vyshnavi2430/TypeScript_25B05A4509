class College {
    static collegeName: string = "Shri Vishnu Engineering College for Women";

    static displayCollegeName(): void {
        console.log("College Name:", College.collegeName);
    }
}

College.displayCollegeName();