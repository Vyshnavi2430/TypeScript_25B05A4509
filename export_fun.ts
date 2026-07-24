export function calculateTotal(m1: number,m2: number,m3: number): number {
    return m1 + m2 + m3;
}

export function average(total: number, subjects: number): number {
    return total / subjects;
}

export function percentage(obtainedMarks: number,totalMarks: number): number {
    return (obtainedMarks / totalMarks) * 100;
}

export function getGrade(per: number): string {
    if (per >= 90) {
        return "A+";
    } else if (per >= 75) {
        return "A";
    } else if (per >= 60) {
        return "B";
    } else {
        return "C";
    }
}
